import React from 'react';

const useTable = () => {
  // Verifica se o a propriedade requisitada existe no objeto
  const getFieldByPath = ({ fields, path, format }) => {
    if (fields[path] || path in fields)
      return !format ? fields[path] : format(fields[path]);

    return '';
  };

  const getNestedFieldValue = ({ fields, path }) => {
    const keys = path.split('.');

    const result = keys.reduce((acc, key) => {
      if (!acc[key]) {
        return '';
      }

      return acc[key];
    }, fields);

    return result;
  };

  const getFieldsValues = ({ fields, path, format }) => {
    const keys = path;
    const result = keys
      .map((key) => ({ [key]: fields[key] }))
      .reduce(
        (obj, prop) => ({
          ...obj,
          ...prop,
        }),
        {}
      );

    return format
      ? format(result)
      : 'When path is array, the prop format is required';
  };

  // Retorna o valor do campo baseado na propriedade (path)
  const getFieldValue = (params) => {
    const { path } = params;
    // console.log(fields, path, format);
    if (Array.isArray(path)) return getFieldsValues(params);

    // Verifica se o path é aninhado
    if (path.indexOf('.') === -1) return getFieldByPath(params);

    return getNestedFieldValue(params);
  };

  const renderThead = (columns, ThComponent) =>
    columns.map(({ key, label }) => (
      <ThComponent key={key + label}>{label}</ThComponent>
    ));

  const renderTbody = (columns, rows, TrComponent, TdComponent) =>
    rows.map((row, index) => (
      <TrComponent key={`row-${index + 0}`}>
        {columns.map(({ key, label, format }) => (
          <TdComponent key={key + label} data-label={`${label}`}>
            {key ? getFieldValue({ fields: row, path: key, format }) : format()}
          </TdComponent>
        ))}
      </TrComponent>
    ));

  const renderTbodyNoContent = (columns, TrComponent, TdComponent) => (
    <TrComponent>
      <TdComponent colSpan={columns.length}>
        Nenhum dado encontrado
      </TdComponent>
    </TrComponent>
  );

  const renderTbodyLoadingContent = (
    columns,
    preLoadRows,
    TrComponent,
    TdComponent,
    ContentLoaderComponent
  ) => {
    const items = [];

    do {
      items.push(<ContentLoaderComponent />);
    } while (items.length < preLoadRows);

    return (
      <>
        {items.map((item, index) => (
          <TrComponent key={`td-${index + 0}`}>
            {columns.map(({ key }) => (
              <TdComponent key={key}>{item}</TdComponent>
            ))}
          </TrComponent>
        ))}
      </>
    );
  };

  return {
    renderThead,
    renderTbody,
    renderTbodyNoContent,
    renderTbodyLoadingContent,
  };
};

export default useTable;
