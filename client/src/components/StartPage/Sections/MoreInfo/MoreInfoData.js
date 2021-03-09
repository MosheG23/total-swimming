import { GiTeacher, GiPoolDive } from 'react-icons/gi'
import { FaSwimmingPool } from 'react-icons/fa'
import { BiSwim } from 'react-icons/bi'

export const moreInfoData = [
    {
        title: "מורי שחייה מוסמכים",
        number: 3,
        icon: <GiTeacher />
    }, {
        title: "שעות שחייה שבועיות",
        number: 50,
        icon: <GiPoolDive />,
        suffix: "+"
    }, {
        title: "סגנונות שחייה שונים",
        number: 5,
        icon: <BiSwim />
    }
]