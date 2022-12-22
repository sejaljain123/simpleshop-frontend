import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import InvoiceContext from '../../../context/InvoiceContext/InvoiceContext';
import Input from '../../Input/Input';

const ItemTable = () => {
  const { formData, updateItems, addItem, removeItem } = useContext(InvoiceContext)

  const disabled = {"disabled": true};
  let isFirstItem = !(formData.items.length === 1);
  
  return(
    <>
      <div className="grid grid-cols-5 text-left gap-x-5">
        <span>Item Name</span>
        <span>Weight (gm)</span>
        <span>Rate (per 10 gm)</span>
        <span>Amount (Rs)</span>
        <span>Action</span>
      </div>
      <hr className="my-2" />
      {formData.items.map((item, index) => {
        return (
          <div className="grid grid-cols-5 gap-x-5 mt-1" key={index}>
            <Input
              label="Item Name"
              name="name"
              type="text"
              value={item.name}
              onChange={(e) => updateItems(index, "name", e.target.value)}
              styles=""
            />
            <Input
              label="Weight"
              name="weight"
              type="number"
              value={item.weight}
              onChange={(e) => updateItems(index, "weight", e.target.value)}
              styles=""
            />
            <Input
              label="Rate"
              name="rate"
              type="number"
              value={item.rate}
              onChange={(e) => updateItems(index, "rate", e.target.value)}
              styles=""
            />
            <Input
              label="Amount"
              name="amount"
              type="text"
              value={item.amount}
              styles=""
              {...disabled}
            />
            {isFirstItem ? (
              <MdDelete
                className="cursor-pointer"
                onClick={() => removeItem(index)}
                size={30}
              />
            ) : (
              <MdDelete className="cursor-pointer" size={30} color="gray" />
            )}
          </div>
        );
      })}
      <hr className="my-2" />
      <span className="text-[#256df1] cursor-pointer" onClick={addItem} > Add Item</span>
      <hr className="my-2" />
    </>
  )
}

export default ItemTable;