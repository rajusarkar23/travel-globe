"use client"
import { Button, DateRangePicker, Form, Input, Select, SelectItem } from "@heroui/react";

const rooms = [
    { key: "ac", label: "AC Room" },
    { key: "non-ac", label: "Non-AC Room" }];

export default function CustomPackageForm() {
    return (
        <div className="mx-auto max-w-4xl flex justify-center flex-col">
            <h2 className="text-3xl font-bold text-orange-500 text-center underline">Make your custom Custom Package </h2>
            <Form className="mt-4 mb-4 flex flex-row items-center">
                <div className="gap-4">
                    <div>
                        <label className="font-semibold text-green-600">Member count</label>
                        <Input type="number" label="Member count" labelPlacement="inside" color="success" className="w-48" />
                    </div>
                </div>
                <div>
                    <label className="font-semibold text-green-600">Stay duration</label>
                    <DateRangePicker className="w-64" label="Stay duration" color="success" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-green-600">Room type</label>
                    <Select
                        className="w-48"
                        items={rooms}
                        label="Room type"
                        placeholder="Select an room type"
                        color="success"
                    >
                        {(rooms) => <SelectItem>{rooms.label}</SelectItem>}
                    </Select>
                </div>
                <div>
                    <label className="font-semibold text-green-600">Total cost</label>
                    <Input type="number" label="Total cost" labelPlacement="inside" className="w-32" color="success" readOnly/>
                </div>

                <div className="">
                    <Button className="flex flex-col py-7 mt-6 font-bold text-white text-md" color="success">Book now</Button>
                </div>

            </Form>
        </div>
    )
}