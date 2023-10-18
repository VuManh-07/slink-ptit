import { Input, Icon } from 'antd';
import styles from './index.less';
import { useState } from 'react';
interface IProps {
  onChange: (value: any) => void;
}
const EditableItem = (props: IProps) => {
  const [value, setValue] = useState();
  const [editable, setEditable] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setValue(e.currentTarget.value);
  };
  const check = () => {
    setEditable(false);
    const { onChange } = props;
    if (onChange) {
      onChange(value);
    }
  };
  const edit = () => {
    setEditable(true);
  };
  return (
    <div className={styles.editableItem}>
      {editable ? (
        <div className={styles.wrapper}>
          <Input value={value} onChange={handleChange} onPressEnter={check} />
          <Icon type="check" className={styles.icon} onClick={check} />
        </div>
      ) : (
        <div className={styles.wrapper}>
          <span>{value || ' '}</span>
          <Icon type="edit" className={styles.icon} onClick={edit} />
        </div>
      )}
    </div>
  );
};
export default EditableItem;
