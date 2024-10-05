import React from 'react'
import CodeModal from '../../CodeModal'

const FlushAccordiancode = () => {
  return (
    <>
        <CodeModal>
                {`
    import { Accordion } from "flowbite-react";

    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="focus:ring-0">
          Accordion Item #1
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="focus:ring-0">
          Accordion Item #2
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="focus:ring-0">
          Accordion Item #3
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>    
               `}
              </CodeModal>
    </>
  )
}

export default FlushAccordiancode