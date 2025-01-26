"use client";
import { Button, DateRangePicker, Form, Input, Select, SelectItem } from "@heroui/react";

const rooms = [
    { key: "ac", label: "AC Room" },
    { key: "non-ac", label: "Non-AC Room" }
];

export default function CustomPackageForm() {
    return (
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-orange-500 text-center decoration-orange-500 decoration-2 underline underline-offset-8 mb-8">
                Make Your Custom Package
            </h2>

            {/* Form */}
            <Form className="w-full max-w-2xl flex flex-col gap-6 items-center">
                {/* Member Count and Room Type in the Same Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                        <label className="font-semibold text-green-600">Member count</label>
                        <Input
                            type="number"
                            label="Member count"
                            labelPlacement="inside"
                            color="success"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-green-600">Room type</label>
                        <Select
                            className="w-full"
                            items={rooms}
                            label="Room type"
                            placeholder="Select a room type"
                            color="success"
                        >
                            {(room) => <SelectItem>{room.label}</SelectItem>}
                        </Select>
                    </div>
                </div>

                {/* Stay Duration and Total Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                        <label className="font-semibold text-green-600">Stay duration</label>
                        <DateRangePicker
                            className="w-full"
                            label="Stay duration"
                            color="success"
                        />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-green-600">Total cost</label>
                        <Input
                            type="number"
                            label="Total cost"
                            labelPlacement="inside"
                            className="w-full"
                            color="success"
                            readOnly
                        />
                    </div>
                </div>

                {/* Book Now Button */}
                <div className="flex justify-center w-full">
                    <Button
                        className="w-full sm:w-auto py-7 font-bold text-white text-md"
                        color="success"
                    >
                        Book Now
                    </Button>
                </div>
            </Form>
        </div>
    );
}