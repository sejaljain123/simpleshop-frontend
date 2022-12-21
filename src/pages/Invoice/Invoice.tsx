import Button from "../../components/Button/Button"

const Invoice = () => {

    const handleClick = () => {
        console.log("clicked")
    }
 return (
   <div>Invoice
    <Button type="submit" onClick={handleClick} label="Go Back" />
   </div>
  )

}

export default Invoice