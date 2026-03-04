import React, { use } from 'react'
import TicketCards from '../TicketCards/TicketCards';
import TaskStatusSection from '../TaskStatusSection/TaskStatusSection';
import { toast } from 'react-toastify/unstyled';

export default function TicketCard({ ticketPromise, handelClickCard, progress, handelCompleteBtnRemove, resolved }) {
  const ticketData = use(ticketPromise)

  return (
    <div className="w-10/12 mx-auto mb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
        <h2 className="text-2xl font-semibold">Customer Tickets</h2>
        <h2 className="text-2xl font-semibold">Task Status</h2>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= LEFT SIDE ================= */}

        <div className="lg:col-span-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
              ticketData.map((data) => <TicketCards key={data.id} handelClickCard={handelClickCard} data={data}></TicketCards>)
            }
            {/* Card */}


          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-1">

          <div className=" h-fit space-y-6">
            {/* Dynamic Section 1 */}
            {progress.length > 0 ? (
              progress.map((taskCard) => <TaskStatusSection handelCompleteBtnRemove={handelCompleteBtnRemove} key={taskCard.id} taskCard={taskCard}></TaskStatusSection>)
            ) : (
              <div className='bg-white shadow p-5 rounded-md'>
                <h2 className="font-semibold mb-2">
                  Select a ticket to add to Task Status
                </h2>
              </div>
            )
            }

            {/* Dynamic Section 2 */}
            {
              resolved.length > 0 ? (
                resolved.map((resolved => <div className='bg-white shadow p-5 rounded-md'>
                  <h2 className="font-semibold mb-2">
                    {resolved.title}
                  </h2>
                </div>))
              ) : (
                <div className='bg-white shadow p-5 rounded-md'>
                  <h2 className="font-semibold mb-2">
                    Resolved Task
                  </h2>
                </div>
              )
            }
          </div>

        </div>

      </div>
    </div>
  );
};
