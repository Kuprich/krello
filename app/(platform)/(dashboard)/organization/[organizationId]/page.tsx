import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"

const OrganizationPage = () => {
  return (
    <div>
      <form action={create}>
        <input 
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-2 text-sm"/>
          <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default OrganizationPage