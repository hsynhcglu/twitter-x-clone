import { Popover } from "@headlessui/react"


export default function Account() {
    return (
        <div className="mt-auto">
            <Popover>
                <Popover.Button 
                className="my-3">
                    account
                </Popover.Button>
                <Popover.Panel>
                    acildi
                </Popover.Panel>
            </Popover>

        </div>
    )
}