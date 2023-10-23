
import { Calendar , CalendarProvider} from "zaman";
import './calender.css';

export default function Calender() {
    return(<div className='lilwarp'>

        <CalendarProvider locale="fa" round="x2">
            <Calendar
                defaultValue={new Date()}
                onChange={(from, to) =>
                    console.log("from >>", from, "\n", "to >>", to)
                }
                weekends={[6]}
            />
        </CalendarProvider>

    </div>)
}