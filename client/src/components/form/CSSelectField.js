import React from 'react';

function arrayToOptions(array, keys){
  const result = {};
  array.forEach((option, idx) => {
    result[idx] = {
      value: option[keys.value],
      label: option[keys.label]
    };
  })
  return Object.values(result);
}

const CSSelectField = ({
                          className = '',
                          name = '',
                          title = null,
                          options = [],
                          keys={value: "value", label: "label"},
                          emptyOption = true,
                          field,
                          form,
                          ...props
                        }) => {
  const opts = arrayToOptions(options, keys);
  return (
    <select {...field}
            {...props}>
        {emptyOption &&
            <option value="">Selecione uma opção</option>
        }
        {opts.map((opt, idx) =>
            <option key={idx} value={opt.value}>{opt.label}</option>
        )}
    </select>
  );
}

export default CSSelectField;
