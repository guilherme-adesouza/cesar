import React from 'react';

function buildLabel({label, option, joiner = ' - '}){
   if(typeof label === 'object') {
     let concatLabel = [];
     for(let itemLabel of label) {
        concatLabel.push(option[itemLabel]);
     }
     return concatLabel.join(joiner);
   }
   return option[label];
}

function arrayToOptions(array, keys){
  const result = {};
  array.forEach((option, idx) => {
    result[idx] = {
      value: option[keys.value],
      label: buildLabel({label: keys.label, option})
    };
  });
  return Object.values(result);
}

const CSSelectField = ({
                          className = '',
                          name = '',
                          title = null,
                          options = [],
                          customChange = null,
                          keys={value: 'value', label: 'label'},
                          emptyOption = true,
                          field,
                          form,
                          ...props
                        }) => {
  const opts = arrayToOptions(options, keys);
  const {onChange, ...fieldProps} = field;
  return (
    <select {...props}
            {...fieldProps}
            onChange={(e) => {
              if(customChange) customChange(e);
              onChange(e);
            }}>
        {emptyOption &&
            <option value="">Selecione uma opção</option>
        }
        {opts.map((opt, idx) =>
            <option key={idx} value={opt.value}>{opt.label}</option>
        )}
    </select>
  );
};

export default CSSelectField;
