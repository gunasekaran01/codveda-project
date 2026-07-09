import { memo, useMemo } from "react";

import Button from "./Button";
import Input from "./Input";
import Badge from "./Badge";
import Alert from "./Alert";
import Avatar from "./Avatar";
import Spinner from "./Spinner";
import Progress from "./Progress";
import Tooltip from "./Tooltip";
import Toast from "./Toast";
import Modal from "./Modal";
import Accordion from "./Accordion";
import Tabs from "./Tabs";
import Skeleton from "./Skeleton";
import Card from "./Card";

import card1 from "../assets/images/card1.webp";
import card2 from "../assets/images/card2.webp";
import card3 from "../assets/images/card3.webp";
import avatar from "../assets/images/avatar.webp";

const PageSections = memo(function PageSections({
    openModal,
    showToast,
    setOpenModal,
    setShowToast,
    closeModalHandler,
    closeToastHandler,
    openModalHandler
}) {
    const accordionItems = useMemo(() => [
        {
            title: "What is Nova UI?",
            content: "Nova UI is a reusable React component library built using React."
        },
        {
            title: "What components are available?",
            content: "Button, Input, Card, Badge, Alert, Avatar, Spinner, Progress, Tooltip, Toast, Modal and many more."
        },
        {
            title: "Can I customize components?",
            content: "Yes. Every component supports props for customization."
        }
    ], []);

    const tabs = useMemo(() => [
        {
            label: "Overview",
            content: <p>Nova UI is a reusable React UI Library.</p>
        },
        {
            label: "Installation",
            content: <p>npm install nova-ui</p>
        },
        {
            label: "Components",
            content: <p>15+ reusable UI components.</p>
        }
    ], []);

    return (
        <main className="content">
            <section>
                <div className="placeholder">
                    <section id="button" className="component-section">
                        <h2>Button</h2>
                        <p className="component-description">
                            Buttons trigger actions inside the application.
                        </p>
                        <div className="example-box">
                            <Button>Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                        <div className="code-box">{"<Button variant='primary'>Primary</Button>"}</div>
                    </section>
                </div>
            </section>

            <section id="input" className="component-section">
                <h2>Input</h2>
                <p className="component-description">
                    Reusable input fields with validation, helper text and multiple sizes.
                </p>
                <div className="example-box">
                    <Input label="Name" placeholder="Enter your name" />
                    <Input label="Email" type="email" placeholder="Enter your email" helperText="We'll never share your email." />
                    <Input label="Password" type="password" placeholder="Enter password" />
                    <Input label="Email" error="Invalid email address." />
                </div>
                <div className="code-box">{"<Input label='Email' type='email' />"}</div>
            </section>

            <section id="card" className="component-section">
                <h2>Card</h2>
                <p className="component-description">
                    Cards display grouped content with optional images, badges and actions.
                </p>
                <div className="grid">
                    <Card title="Basic Card" description="Simple reusable card." />
                    <Card image={card1} title="Image Card" description="Professional reusable card." badge="NEW" />
                    <Card image={card2} title="React Library" description="Built using reusable React components." buttonText="Documentation" badge="React" />
                </div>
                <div className="code-box">{"<Card title='React Card' badge='NEW' />"}</div>
            </section>

            <section id="badge" className="component-section">
                <h2>Badge</h2>
                <p className="component-description">
                    Small labels used to display status or category.
                </p>
                <div className="example-box">
                    <Badge>Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="primary" outline>Outline</Badge>
                </div>
                <div className="code-box">{"<Badge variant='success'>Success</Badge>"}</div>
            </section>

            <section id="alert" className="component-section">
                <h2>Alert</h2>
                <p className="component-description">
                    Display important messages to users.
                </p>
                <div className="example-box">
                    <Alert />
                    <Alert variant="warning" title="Warning" message="Please verify your information." />
                    <Alert variant="danger" title="Error" message="Unable to connect to the server." />
                </div>
                <div className="code-box">{"<Alert variant='danger' title='Error' />"}</div>
            </section>

            <section id="avatar" className="component-section">
                <h2>Avatar</h2>
                <p className="component-description">
                    Display profile pictures or user initials with multiple sizes and status indicators.
                </p>
                <div className="example-box">
                    <Avatar name="Nova UI" />
                    <Avatar name="React" variant="success" />
                    <Avatar name="Material UI" variant="danger" />
                    <Avatar src={avatar} status="online" />
                    <Avatar src={avatar} status="busy" />
                    <Avatar name="Square" square variant="warning" />
                </div>
                <div className="code-box">{"<Avatar name='Nova UI' status='online' />"}</div>
            </section>

            <section id="spinner" className="component-section">
                <h2>Spinner</h2>
                <p className="component-description">
                    Loading indicators used while fetching or processing data.
                </p>
                <div className="example-box">
                    <Spinner />
                    <Spinner variant="success" />
                    <Spinner variant="danger" />
                    <Spinner size="large" text="Loading..." />
                    <Spinner type="dots" variant="warning" text="Please wait..." />
                </div>
                <div className="code-box">{"<Spinner variant='primary' size='large' />"}</div>
            </section>

            <section id="progress" className="component-section">
                <h2>Progress</h2>
                <p className="component-description">
                    Visual indicators showing task completion.
                </p>
                <div className="example-box">
                    <Progress value={30} />
                    <Progress value={60} variant="success" />
                    <Progress value={85} variant="warning" striped animated />
                    <Progress circular value={75} />
                </div>
                <div className="code-box">{"<Progress value={70} variant='success' />"}</div>
            </section>

            <section id="tooltip" className="component-section">
                <h2>Tooltip</h2>
                <p className="component-description">
                    Display additional information when hovering over an element.
                </p>
                <div className="example-box">
                    <Tooltip text="Save changes">
                        <button className="card-button">Hover Me</button>
                    </Tooltip>
                </div>
                <div className="code-box">{"<Tooltip text='Save'>...</Tooltip>"}</div>
            </section>

            <section id="toast" className="component-section">
                <h2>Toast</h2>
                <p className="component-description">
                    Temporary notification messages.
                </p>
                <div className="example-box">
                    <button className="card-button" onClick={() => setShowToast(true)}>
                        Show Toast
                    </button>
                    {showToast && <Toast message="Profile Updated Successfully" variant="success" onClose={closeToastHandler} />}
                </div>
                <div className="code-box">{"<Toast message='Saved Successfully' />"}</div>
            </section>

            <section id="modal" className="component-section">
                <h2>Modal</h2>
                <p className="component-description">
                    Interactive dialog for confirmations, forms and important actions.
                </p>
                <div className="example-box">
                    <Button onClick={openModalHandler}>Open Modal</Button>
                    <Modal open={openModal} title="Nova UI Modal" onClose={closeModalHandler} onConfirm={() => {
                        alert("Confirmed");
                        closeModalHandler();
                    }}>
                        This is a reusable Modal component built for Nova UI.
                    </Modal>
                </div>
                <div className="code-box">{"<Modal open={true}>...</Modal>"}</div>
            </section>

            <section id="accordion" className="component-section">
                <h2>Accordion</h2>
                <p className="component-description">
                    Expandable sections used to organize related content.
                </p>
                <div className="example-box">
                    <Accordion items={accordionItems} />
                </div>
                <div className="code-box">{"<Accordion items={items} />"}</div>
            </section>

            <section id="tabs" className="component-section">
                <h2>Tabs</h2>
                <p className="component-description">
                    Switch between different sections of content.
                </p>
                <div className="example-box">
                    <Tabs tabs={tabs} />
                </div>
                <div className="code-box">{"<Tabs tabs={tabs} />"}</div>
            </section>

            <section id="skeleton" className="component-section">
                <h2>Skeleton</h2>
                <p className="component-description">
                    Display loading placeholders while data is loading.
                </p>
                <div className="example-box">
                    <Skeleton />
                    <Skeleton width="70%" />
                    <Skeleton width="50%" />
                    <Skeleton variant="circle" />
                    <Skeleton variant="card" height="180px" />
                </div>
                <div className="code-box">{"<Skeleton variant='card' />"}</div>
            </section>
        </main>
    );
});

export default PageSections;
