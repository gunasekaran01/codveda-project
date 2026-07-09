import { memo, useState } from "react";
import "./Tabs.css";

const Tabs = memo(function Tabs({ tabs = [] }) {

    const [activeTab, setActiveTab] = useState(0);

    return (

        <div className="nova-tabs">

            <div
                className="tabs-header"
                role="tablist"
            >

                {tabs.map((tab, index) => (

                    <button

                        key={index}

                        className={`tab-btn ${
                            activeTab === index ? "active" : ""
                        }`}

                        onClick={() => setActiveTab(index)}

                        role="tab"

                        aria-selected={activeTab === index}

                    >

                        {tab.label}

                    </button>

                ))}

            </div>

            <div
                className="tabs-content"
            >

                {tabs[activeTab]?.content}

            </div>

        </div>

    );

});

export default Tabs;