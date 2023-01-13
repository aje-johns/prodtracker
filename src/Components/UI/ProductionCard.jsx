function ProductionCard() {
  return (
    <div className="card w-auto bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Submission ID</h2>
        <fieldset>
          <label htmlFor="">Policy Number</label>
          <input className="mx-5" type="text" />
          <label htmlFor="">Assured Name</label>
          <input className="mx-5" type="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Comments</label>
          <input className="m-5" type="text" />
        </fieldset>
        <div className="my-3 card-actions justify-end">
          <button className="mx-10 btn btn-outline btn-success">Copy</button>
          <button className="mx-10 btn btn-outline btn-warning">Query</button>
          <button className="mx-10 btn btn-error">END</button>
        </div>
      </div>
    </div>
  );
}

export default ProductionCard;

// The data i Need *******************************
// User Name, start Time, end time , date , activity, lob, policy number
//SYD/Eu, amemdment/ new, submission ID, Assured Name, Total AHT, comments
// buttons- copy to Excel, Raise Query, End Time
