import DateReserve from "@/components/DateReserve";

export default function Booking(){
    return (
        <main className="pt-16 w-[100%] flex flex-col items-center space-y-4">
            <DateReserve/>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600
            px-3 py-2 shadow-sm text-white" name="Book Venue">
                Book Venue
            </button>
        
        </main>
        
    );
}