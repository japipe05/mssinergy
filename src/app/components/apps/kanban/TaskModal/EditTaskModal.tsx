"use client";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { TaskProperties } from "@/app/api/kanban/KanbanData";
import { TextInput, Modal, Label, Button, Select } from "flowbite-react";

function EditTaskModal({ show, onHide, editedTask, onSave }: any) {
  const [tempEditedTask, setTempEditedTask] = useState(editedTask);

  // Function to format a date string into 'YYYY-MM-DD' format
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };
  // Function to handle changes in the task input fields
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setTempEditedTask({ ...tempEditedTask, [name]: value });
  };
  // Function to handle changes in the task property
  const handlePropertyChange = (property: any) => {
    setTempEditedTask({ ...tempEditedTask, taskProperty: property });
  };
  // Function to handle saving the changes made to the task and hiding the modal
  const handleSaveChanges = () => {
    onSave(tempEditedTask);
    onHide();
  };
  return (
    <Modal size={"md"} show={show} onClose={onHide}>
      <Modal.Header className="pb-0">Edit Task</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <Label
              htmlFor="task"
              value="Task"
              className="mb-2 block capitalize"
            />
            <TextInput
              name="task"
              id="task"
              value={tempEditedTask.task}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Label
              htmlFor="tasktext"
              value="Description"
              className="mb-2 block capitalize"
            />
            <TextInput
              name="taskText"
              id="tasktext"
              className="form-control"
              value={tempEditedTask.taskText}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Label
              htmlFor="taskProperty"
              value="Category"
              className="mb-2 block capitalize"
            />
            <Select
              id="taskProperty"
              className="select-md"
              value={tempEditedTask.taskProperty}
              onChange={(e) => handlePropertyChange(e.target.value)}
            >
              {TaskProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-span-12">
            <Label htmlFor="duedt" value="Date" className="mb-2 block capitalize"/>
            <TextInput
              type="date"
              id="duedt"
              className="form-control date-picker-icon "
              value={formatDate(tempEditedTask.date)}
              onChange={(e) =>
                setTempEditedTask({ ...tempEditedTask, date: e.target.value })
              }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} color={'lighterror'}>Close</Button>
        <Button onClick={handleSaveChanges} color={'success'}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditTaskModal;
