import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping, faChartBar, faGaugeHigh, faList, faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Badge, Dropdown, DropdownDivider, DropdownHeader,
    DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, ProgressBar
} from "react-bootstrap";
import Link from "next/link";
import React, { PropsWithChildren} from "react";
import Image from "next/image";
import { getDictionary, getLocale } from "@/locales/dictionary";
import HeaderTheme from "./HeaderTheme";
import { getPreferredTheme } from "@/themes/theme";
import HeaderLocale from "./HeaderLocale";


type ItemWithIconProps = {
    icon: IconDefinition
} & PropsWithChildren

const ItemWithIcon = ( props: ItemWithIconProps ) =>{
    const { icon, children } = props;

    return(
        <>
            <FontAwesomeIcon className="me-2" icon={icon} fixedWidth/>
            {children}
        </>
    )
}

export default async function HeaderNotificationNav() {
    const dict = await getDictionary();

    return(
        <Nav>
            <NavItem className="d-none d-sm-block">
                <Dropdown>
                    <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-task">
                        <FontAwesomeIcon icon={faBell} size="lg" />
                        <Badge pill bg="danger" className="position-absolute top-0 end-0 px-1 px-sm-2">
                        5
                        </Badge>
                    </DropdownToggle>
                    <DropdownMenu className="pt-2" align="end">
                        <DropdownHeader className="fw-bold rounded-top">{dict.notification.message.replace('{{total}}', '5')}</DropdownHeader>
                        <Link href="#" passHref legacyBehavior>
                            <DropdownItem>
                                <ItemWithIcon icon={faUserPlus}>
                                {dict.notification.items.new_user}
                                </ItemWithIcon>
                            </DropdownItem>
                        </Link>
                        <Link href="#" passHref legacyBehavior>
                            <DropdownItem>
                                <ItemWithIcon icon={faChartBar}>
                                {dict.notification.items.sales_report}
                                </ItemWithIcon>
                            </DropdownItem>
                        </Link>
                        <Link href="#" passHref legacyBehavior>
                            <DropdownItem>
                                <ItemWithIcon icon={faBasketShopping}>
                                {dict.notification.items.new_client}
                                </ItemWithIcon>
                            </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </Dropdown>
            </NavItem>
            <NavItem className="d-none d-sm-block">
                <Dropdown>
                    <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-task">
                        <FontAwesomeIcon icon={faList} size="lg" />
                        <Badge pill bg="warning" className="position-absolute top-0 end-0 px-1 px-sm-2">
                        5
                        </Badge>
                    </DropdownToggle>
                    <DropdownMenu className="pt-2" align="end">
                        <DropdownHeader className="fw-bold rounded-top">{dict.task.message.replace('{{total}}', '5')}</DropdownHeader>

                        <Link href="#" passHref legacyBehavior>
                            <DropdownItem>
                                <small className="d-flex">
                                <div>{dict.task.items.task1}</div>
                                <div className="ms-auto">0%</div>
                                </small>
                                <ProgressBar
                                className="progress-thin mt-2"
                                variant="primary"
                                now={10}
                                />
                            </DropdownItem>
                        </Link>
                        <DropdownDivider />

                        <Link href="#" passHref legacyBehavior>
                            <DropdownItem className="text-center fw-bold">{dict.task.view_all}</DropdownItem>
                        </Link>    
                    </DropdownMenu>
                </Dropdown>
            </NavItem>
            <NavItem>
                <HeaderLocale currentLocale={getLocale()} />
            </NavItem>
            <NavItem>
                <HeaderTheme currentPreferredTheme={getPreferredTheme()} />
            </NavItem>
        </Nav>
    )
}