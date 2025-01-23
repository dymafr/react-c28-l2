import React, { useActionState } from "react";
import { wait } from "./utils";

function App() {
  const [error, submitAction, isPending] = useActionState(
    async (oldState, formData) => {
      try {
        const res = await wait(3000, true);
        return null;
      } catch (e) {
        return e;
      }
    }
  );

  return (
    <form action={submitAction} className="p-20">
      <div className="mb-20">
        <input type="text" placeholder="name" name="name" />
        {error && <p>{error}</p>}
      </div>
      <button disabled={isPending} className="btn btn-primary">
        {isPending ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

export default App;
