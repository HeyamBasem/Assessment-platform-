import { useState } from "react";

function Schools() {

    const schoolsData = {
        "لواء ماركا الشمالية": [
            "ابو بكر الرازي الشاملة للبنين",
            "فاطمة الزهراء الثانوية المختلطة",
            "أسماء بنت يزيد الثانوية للبنات",

        ],
        "لواء ماركا الجنوبية": [
            "مدرسة رقية بنت الرسول",
            "مدرسة ليلى الغفارية",
            "مدرسة أبو بكر الصديق الأساسية للبنين"
        ],
        "لواء سحاب": [
            "سحاب الثانوية الشاملة للبنين",
            "سحاب الثانوية المهنية للبنين",
            "الخشافية الثانوية للبنين"
        ]
    };

    const [selectedDistrict, setSelectedDistrict] = useState(null);

    return (
        <div className="container">

            <h1>المدارس حسب الالوية </h1>

            {Object.keys(schoolsData).map((district) => (
                <div key={district}>

                    <button
                        className="create-btn"
                        onClick={() => setSelectedDistrict(district)}
                    >
                        {district}
                    </button>

                </div>
            ))}

            {selectedDistrict && (
                <div className="school-card">

                    <h2>{selectedDistrict}</h2>

                    <ul>
                        {schoolsData[selectedDistrict].map((school, index) => (
                            <li key={index}>
                                {school}
                            </li>
                        ))}
                    </ul>

                </div>
            )}

        </div>
    );
}

export default Schools;