import BankingTabs from '@/components/Banking-Tabs';
import MobileMenu from '@/components/Mobile-Menu';
import Slider from '@/components/Slider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Test = () => {
  return (
    <>
      <div
        className="dialog-off-canvas-main-canvas !font-montserrat"
        data-off-canvas-main-canvas=""
      >
        <div className="layout-container !font-montserrat">
          <header role="banner">
            <div>
              <div id="block-notifications" />
            </div>
            <div className="secondary-menu">
              <div className="secondary-menu__inner">
                <MobileMenu />
                <div className="secondary-menu__wrapper">
                  <div className="secondary-menu__items">
                    <div className="secondary-menu__item secondary-menu__item--branch-locator">
                      <a
                        data-datalayer-event="click"
                        data-datalayer-event_type="Find A Branch"
                        className="secondary-menu__item-link"
                        href="/location-search"
                      >
                        <svg
                          width={36}
                          height={52}
                          viewBox="0 0 36 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
                            fill="#F9CE64"
                          />
                          <path
                            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
                            stroke="white"
                            strokeWidth="4.5"
                          />
                          <path
                            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
                            stroke="#000000"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M21.9536 13.8642C26.8926 20.35 19.5556 27.6742 13.0816 22.734C8.1456 16.2592 15.4676 8.92714 21.9536 13.8642Z"
                            fill="black"
                          />
                        </svg>
                        Find a Branch
                      </a>
                    </div>
                    <div className="secondary-menu__item">
                      <a
                        className="secondary-menu__item-link"
                        href="/company/about-us"
                        title="About Us"
                      >
                        About Us
                      </a>
                    </div>
                    <div className="secondary-menu__item">
                      <a className="secondary-menu__item-link" href="/careers">
                        careers
                      </a>
                    </div>
                    <div className="secondary-menu__item">
                      <a
                        className="secondary-menu__item-link"
                        href="/contact"
                        title=""
                      >
                        Customer Service
                      </a>
                    </div>
                    <div className="secondary-menu__item">
                      <a
                        className="secondary-menu__item-modal link__btn-yellow"
                        href="#"
                        launch-modal="loginModal"
                        data-datalayer-event="click"
                        data-datalayer-event_type="Account Login"
                      >
                        Account Login
                        <svg
                          width={15}
                          height={19}
                          viewBox="0 0 15 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.12495 11.0836C6.68834 11.0836 6.33328 11.4383 6.33328 11.8753C6.33328 12.1666 6.49359 12.4196 6.72912 12.5565V14.6461C6.72912 14.865 6.90645 15.042 7.12495 15.042C7.34345 15.042 7.52078 14.865 7.52078 14.6461V12.5565C7.7563 12.4196 7.91662 12.1666 7.91662 11.8753C7.91662 11.4383 7.56155 11.0836 7.12495 11.0836Z"
                            fill="#000000"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.875 7.125C12.3227 7.125 11.875 6.67728 11.875 6.125V4.75C11.875 2.13077 9.74423 0 7.125 0C4.50577 0 2.375 2.13077 2.375 4.75V6.125C2.375 6.67728 1.92728 7.125 1.375 7.125H1C0.447715 7.125 0 7.57272 0 8.125V18C0 18.5523 0.447715 19 1 19H13.25C13.8023 19 14.25 18.5523 14.25 18V8.125C14.25 7.57272 13.8023 7.125 13.25 7.125H12.875ZM3.16667 4.75C3.16667 2.56738 4.94238 0.791667 7.125 0.791667C9.30762 0.791667 11.0833 2.56738 11.0833 4.75V6.125C11.0833 6.67728 10.6356 7.125 10.0833 7.125H4.16667C3.61438 7.125 3.16667 6.67728 3.16667 6.125V4.75ZM0.791667 8.91667C0.791667 8.36438 1.23938 7.91667 1.79167 7.91667H12.4583C13.0106 7.91667 13.4583 8.36438 13.4583 8.91667V17.2083C13.4583 17.7606 13.0106 18.2083 12.4583 18.2083H1.79167C1.23938 18.2083 0.791667 17.7606 0.791667 17.2083V8.91667Z"
                            fill="#000000"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" data-modal="loginModal">
              <div className="modal__underlay" />
              <div className="modal__content">
                <div className="modal__content-inner">
                  <div
                    data-datalayer-event="click"
                    data-datalayer-event_type="Cancel Login"
                    className="modal__close"
                  >
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.12793 24.2447L23.8648 1.50781"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.8648 24.2447L1.12793 1.50781"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <section className="account-login">
                    <form
                      //   noValidate=""
                      className="account-login__form"
                      method="POST"
                      id="ebc-form"
                      //   form_suffix=""
                      action="https://ebank.pinnbank.com/pbi_pbi1151/login/Remote/104913912"
                    >
                      <fieldset className="account-login__fieldset">
                        <legend className="account-login__legend">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M39.2861 40H32.1431C31.748 40 31.4277 39.6809 31.4277 39.2859V35.7151H27.8569C27.4619 35.7151 27.1431 35.395 27.1431 35V31.4289H23.5708C23.4726 31.4289 23.3789 31.4089 23.293 31.373L23.29 31.3699C23.206 31.335 23.1299 31.2839 23.0659 31.22L22.729 30.8831L16.9018 25.0559C16.6587 25.136 16.4111 25.2039 16.1611 25.27C16.0337 25.3049 15.9077 25.3379 15.7798 25.3679C15.5688 25.418 15.3579 25.4619 15.144 25.5C14.9399 25.5381 14.7339 25.5669 14.5268 25.594C14.3628 25.616 14.2007 25.6399 14.0347 25.655C13.647 25.6919 13.2549 25.7151 12.8569 25.7151C5.75586 25.7151 0 19.959 0 12.8579C0 5.75708 5.75586 0 12.8569 0C19.958 0 25.7139 5.75708 25.7139 12.8579C25.7139 13.2549 25.6909 13.647 25.6548 14.0339C25.6387 14.2029 25.6138 14.3679 25.5928 14.5349C25.5659 14.7371 25.5371 14.9399 25.5 15.1399C25.4609 15.3569 25.416 15.5711 25.3667 15.7839C25.3369 15.9109 25.3027 16.0359 25.27 16.1619C25.2041 16.4109 25.1357 16.6589 25.0547 16.9031L39.791 31.6379C39.854 31.7019 39.9058 31.7781 39.9409 31.8621L39.9439 31.866C39.98 31.9509 40 32.0449 40 32.1431V39.2859C40 39.6809 39.6797 40 39.2861 40V40ZM38.5708 32.4389L26.3911 20.259L23.7837 17.645L23.7891 17.6399C23.6328 17.509 23.5268 17.3191 23.5268 17.0989C23.5268 16.9909 23.5547 16.8909 23.5967 16.7991L23.5747 16.7881C24.0259 15.561 24.2861 14.2419 24.2861 12.8579C24.2861 6.54588 19.1689 1.42893 12.8569 1.42893C6.54492 1.42893 1.42773 6.54587 1.42773 12.8579C1.42773 19.1699 6.54492 24.2859 12.8569 24.2859C14.2378 24.2859 15.5557 24.0268 16.7808 23.5779L16.7939 23.601C16.8867 23.5569 16.9888 23.5268 17.0977 23.5268C17.3188 23.5268 17.5098 23.634 17.6401 23.792L17.647 23.7881L20.2207 26.354L22.6919 28.8259L23.8667 30H27.8569C28.2519 30 28.5708 30.32 28.5708 30.7151V34.2859H32.1431C32.5371 34.2859 32.8569 34.6059 32.8569 35V38.572H38.5708V32.4389ZM10 14.2859C7.63281 14.2859 5.71387 12.3669 5.71387 9.99999C5.71387 7.63402 7.63282 5.71508 10 5.71508C12.3667 5.71508 14.2861 7.63403 14.2861 9.99999C14.2861 12.3669 12.3667 14.2859 10 14.2859ZM10 7.14305C8.42188 7.14305 7.14307 8.42284 7.14307 9.99998C7.14307 11.5779 8.42188 12.8579 10 12.8579C11.5781 12.8579 12.8569 11.5779 12.8569 9.99998C12.8569 8.42283 11.5781 7.14305 10 7.14305Z"
                              fill="#4C7D8C"
                            />
                          </svg>
                          <h2 className="account-login__header">
                            Account Login
                          </h2>
                        </legend>
                        <div className="account-login__actions">
                          <div className="account-login__personal-group">
                            <div
                              className="account-login__input-group account-login__input"
                              style={{ display: 'none' }}
                            >
                              <label
                                className="account-login__visually-hidden"
                                htmlFor="ebc-username"
                              >
                                Username
                              </label>
                              <input
                                id="ebc-username"
                                // required=""
                                name="username"
                                type="text"
                                placeholder="Business Username"
                              />
                            </div>
                            <div
                              className="account-login__input-group account-login__input"
                              style={{ display: 'none' }}
                            >
                              <label
                                className="account-login__visually-hidden"
                                htmlFor="ebc-password"
                              >
                                Password
                              </label>
                              <input
                                id="ebc-password"
                                // required=""
                                name="password"
                                type="password"
                                placeholder="Business Password"
                              />
                            </div>
                            <div
                              className="account-login__input-group account-login__input-username"
                              style={{ display: 'none' }}
                            >
                              <label
                                className="account-login__visually-hidden"
                                htmlFor="account-login__username-input"
                              >
                                Username
                              </label>
                              <input
                                id="account-login__username-input"
                                // required=""
                                name="username"
                                type="text"
                                placeholder="Access Username"
                              />
                            </div>
                            <div
                              className="account-login__input-group personalLogin-input_password"
                              style={{ display: 'none' }}
                            >
                              <label
                                className="account-login__visually-hidden"
                                htmlFor="account-login__password-input"
                              >
                                Password
                              </label>
                              <input
                                id="account-login__password-input"
                                // required=""
                                name="password"
                                type="password"
                                placeholder="Access Password"
                              />
                            </div>
                          </div>
                          <div className="account-login__actions-action">
                            <button
                              className="account-login__button account-login__personal1-button"
                              type="button"
                              data-datalayer-event="click"
                              data-datalayer-event_type="Personal Login"
                              data-datalayer-line_of_business="Personal"
                            >
                              Personal Login
                            </button>
                          </div>
                          <div className="account-login__actions-action">
                            <button
                              className="account-login__button account-login__business1-button"
                              type="button"
                              data-datalayer-event="click"
                              data-datalayer-event_type="Business Login"
                              data-datalayer-line_of_business="Business"
                            >
                              Business Login
                            </button>
                          </div>
                          <div className="account-login__actions-action">
                            <button
                              className="account-login__button account-login__premium-button"
                              type="button"
                              data-datalayer-event="click"
                              data-datalayer-event_type="Business Premium Login"
                              data-datalayer-line_of_business="Business"
                            >
                              Business Premium Login
                            </button>
                          </div>
                          <div className="account-login__actions-action account-login__actions-action-cancel">
                            <button
                              className="account-login__button account-login__cancel"
                              type="button"
                              style={{ display: 'none' }}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Cancel Login"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      <ul className="account-login__links">
                        <li className="account-login__links-link account-login__first-time-login">
                          <a
                            target="_blank"
                            className="link__default"
                            href="https://web13.secureinternetbank.com/PBI_PBI1151/Enroll/104913912"
                          >
                            Consumer First Time Login
                          </a>
                        </li>
                        <li className="account-login__links-link account-login__online-banking-signup">
                          <a
                            className="link__default"
                            href="https://secureforms.c3vault1.com/forms/pinnbank/internet-banking-application.asp"
                          >
                            Consumer Online Banking Application
                          </a>
                        </li>
                        <li className="account-login__links-link account-login__business-banking-signup">
                          <a
                            className="link__default"
                            href="https://secureforms.c3vault1.com/forms/pinnbank/business-online-application.asp"
                          >
                            Business Online Banking Application
                          </a>
                        </li>
                        <li className="account-login__links-link account-login__business-lost-token visually-hidden">
                          <a
                            className="link__default"
                            href="https://web13.secureinternetbank.comEBC_EBC1151/PhysicalToken/LostOrDamaged/104913912/1"
                          >
                            Lost or Damaged Token
                          </a>
                        </li>
                        <li className="account-login__links-link account-login__forgot-password visually-hidden">
                          <a
                            data-business-reset="https://web13.secureinternetbank.comEBC_EBC1151/ForgotPassword/104913912/1"
                            data-business-text="Forgot password or PIN?"
                            data-personal-text="Forgot Password?"
                            data-personal-reset="https://web13.secureinternetbank.comPBI_PBI1151/ForgotPassword/104913912"
                            className="link__default"
                            href="https://web13.secureinternetbank.comPBI_PBI1151/ForgotPassword/104913912"
                          >
                            Forgot Password?
                          </a>
                        </li>
                      </ul>
                      <input
                        className="BOLoginSubmitButton"
                        type="submit"
                        defaultValue="Login"
                        id="ebcsubmit"
                        style={{ display: 'none' }}
                      />
                    </form>
                  </section>
                </div>
              </div>
            </div>
            <div className="page-header">
              <div className="page-header__wrapper">
                <div className="page-header__logo" role="banner">
                  <a href="https://www.pinnbank.com/">
                    <img
                      src="https://www.pinnbank.com/sites/default/files/charter/logo/PinnacleBank_LogoWithTagline_horizontal_1.svg"
                      alt="Logo for Pinnacle Bank"
                    />
                  </a>
                </div>
                <div className="page-header__inner">
                  <nav className="page-header__tabs">
                    <ul className="page-header__tabs-list">
                      <li
                        className="page-header__tabs-tab page-header__tabs-tab_personal"
                        data-menu-id="personal"
                      >
                        <div className="page-header__tabs-tab-header">
                          <span className="page-header__tabs-tab-hd-label !font-montserrat">
                            Personal
                          </span>
                          <span className="page-header__tabs-tab-icon page-header__tabs-tab-icon-inactive">
                            <svg
                              width={24}
                              height={12}
                              viewBox="0 0 24 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.868 0.73707V0.73805L12.297 11.8811L12.296 11.8792C12.219 11.9541 12.115 12 12 12C11.884 12 11.78 11.9541 11.703 11.8792V11.8811L0.13098 0.73805L0.13199 0.73707C0.051 0.65919 0 0.55006 0 0.42896C0 0.19214 0.19098 0 0.42798 0C0.54398 0 0.64798 0.04712 0.72498 0.12109L0.72599 0.12011L12 10.977L23.274 0.12011L23.275 0.12109C23.352 0.04712 23.456 0 23.571 0C23.808 0 24 0.19214 24 0.42896C24 0.55005 23.948 0.65918 23.868 0.73707H23.868Z"
                                fill="#4D6D7A"
                              />
                            </svg>
                          </span>
                          <span className="page-header__tabs-tab-icon page-header__tabs-tab-icon-active">
                            <svg
                              width={24}
                              height={12}
                              viewBox="0 0 24 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.13201 11.2629L0.131 11.262L11.703 0.1189V0.12085C11.78 0.0459 11.884 0 12 0C12.115 0 12.219 0.0459 12.296 0.12085L12.297 0.1189L23.868 11.262V11.2629C23.948 11.3411 24 11.45 24 11.5711C24 11.8079 23.808 12 23.571 12C23.456 12 23.352 11.9529 23.275 11.8789L23.274 11.8799L12 1.02298L0.72599 11.8799L0.72498 11.8789C0.64798 11.9529 0.54398 12 0.42798 12C0.19098 12 0 11.8079 0 11.5711C0 11.45 0.05099 11.3411 0.13199 11.2629H0.13201Z"
                                fill="#4D6D7A"
                              />
                            </svg>
                          </span>
                          <span className="visually-hidden">Toggle Menu</span>
                        </div>
                      </li>
                      <li
                        className="page-header__tabs-tab page-header__tabs-tab_business"
                        data-menu-id="business"
                      >
                        <div className="page-header__tabs-tab-header">
                          <span className="page-header__tabs-tab-hd-label !font-montserrat">
                            Business
                          </span>
                          <span className="page-header__tabs-tab-icon page-header__tabs-tab-icon-inactive">
                            <svg
                              width={24}
                              height={12}
                              viewBox="0 0 24 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.868 0.73707V0.73805L12.297 11.8811L12.296 11.8792C12.219 11.9541 12.115 12 12 12C11.884 12 11.78 11.9541 11.703 11.8792V11.8811L0.13098 0.73805L0.13199 0.73707C0.051 0.65919 0 0.55006 0 0.42896C0 0.19214 0.19098 0 0.42798 0C0.54398 0 0.64798 0.04712 0.72498 0.12109L0.72599 0.12011L12 10.977L23.274 0.12011L23.275 0.12109C23.352 0.04712 23.456 0 23.571 0C23.808 0 24 0.19214 24 0.42896C24 0.55005 23.948 0.65918 23.868 0.73707H23.868Z"
                                fill="#4D6D7A"
                              />
                            </svg>
                          </span>
                          <span className="page-header__tabs-tab-icon page-header__tabs-tab-icon-active">
                            <svg
                              width={24}
                              height={12}
                              viewBox="0 0 24 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.13201 11.2629L0.131 11.262L11.703 0.1189V0.12085C11.78 0.0459 11.884 0 12 0C12.115 0 12.219 0.0459 12.296 0.12085L12.297 0.1189L23.868 11.262V11.2629C23.948 11.3411 24 11.45 24 11.5711C24 11.8079 23.808 12 23.571 12C23.456 12 23.352 11.9529 23.275 11.8789L23.274 11.8799L12 1.02298L0.72599 11.8799L0.72498 11.8789C0.64798 11.9529 0.54398 12 0.42798 12C0.19098 12 0 11.8079 0 11.5711C0 11.45 0.05099 11.3411 0.13199 11.2629H0.13201Z"
                                fill="#4D6D7A"
                              />
                            </svg>
                          </span>
                          <span className="visually-hidden">Toggle Menu</span>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <div className="page-header__search page-header__search-desktop">
                    <form method="GET" role="search" action="/site-search">
                      <label
                        htmlFor="desktop-search"
                        className="visually-hidden"
                      >
                        Site Search
                      </label>
                      <input
                        id="desktop-search"
                        name="search"
                        type="text"
                        className="aa-SearchBox-input"
                        placeholder="Site Search"
                      />
                      <button className="aa-SearchBox-submit" type="submit" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="page-header__menu clearfix">
                <div className="page-header__tabs-tab-menu page-header__tabs-tab-menu-personal page-header__tabs-tab-menu-inactive">
                  <div className="page-header__tabs-tab-menu-wrpper">
                    <nav className="pinn-menu">
                      <ul className="pinn-menu-wrapper">
                        <li className="pinn-menu-left-column">
                          <ul className="pinn-menu-list">
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Banking
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Products
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/checking"
                                        title="Checking"
                                      >
                                        Checking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/savings"
                                        title="Savings"
                                      >
                                        Savings
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/visa-debit-card"
                                        title="Visa Debit Card"
                                      >
                                        Visa Debit Card
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/credit-card"
                                        title="Credit Cards"
                                      >
                                        Credit Cards
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Borrowing
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Loans
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/mortgage-loans"
                                        title="Home Loans"
                                      >
                                        Home Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/home-equity-loans"
                                        title="Home Equity Loans and Lines"
                                      >
                                        Home Equity Loans and Lines
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/auto-loans"
                                        title="Auto Loans"
                                      >
                                        Auto Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/other-loans"
                                        title="Other Loans"
                                      >
                                        Other Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/make-a-payment"
                                        title="Make a Loan Payment"
                                      >
                                        Make a Loan Payment
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Investing
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Products
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-investing/cd"
                                        title="Certificate of Deposit"
                                      >
                                        Certificate of Deposit
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-investing/hsa"
                                        title="Health Savings Account"
                                      >
                                        Health Savings Account
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-investing/hsa-investment"
                                        title="HSA Investment Account"
                                      >
                                        HSA Investment Account
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-investing/ira"
                                        title="IRAs"
                                      >
                                        IRAs
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/trust"
                                        title="Trust Services"
                                      >
                                        Trust Services
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu-blocks pinn-menu-blocks--desktop">
                              <ul className="pinn-menu-blocks-items">
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    Open a Free Checking Account Today
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Our most popular account for managing
                                    day-to-day finances
                                  </p>
                                  <a
                                    data-navigation="personal banking"
                                    data-style="btn_yellow"
                                    href="/personal-banking/checking/free-checking"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Open in Minutes
                                  </a>
                                </li>
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    Apply Now for a Home Loan
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Get one step closer to your dream home
                                  </p>
                                  <a
                                    data-navigation="personal borrowing"
                                    data-style="btn_yellow"
                                    href="/personal-borrowing/mortgage-loans"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Get Started
                                  </a>
                                </li>
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    Make the Smart Move, Open a CD
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Earn a higher return and start growing your
                                    savings
                                  </p>
                                  <a
                                    data-navigation="personal investing"
                                    data-style="btn_yellow"
                                    href="/personal-investing/cd"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Get the Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="pinn-menu-right-column">
                          <ul className="pinn-menu-list">
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Ways to Bank
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/personal-banking/ways-to-bank"
                                    title="Overview"
                                  >
                                    Overview
                                  </a>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/online-banking"
                                        title="Online Banking"
                                      >
                                        Online Banking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/mobile-banking"
                                        title="Mobile Banking"
                                      >
                                        Mobile Banking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/online-billpay"
                                        title="PinnPay Online Bill Pay"
                                      >
                                        PinnPay Online Bill Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/online-statements"
                                        title="Electronic Statements and Notices"
                                      >
                                        Electronic Statements and Notices
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/zelle"
                                        title="Zelle"
                                      >
                                        Zelle
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/account-alerts"
                                        title="Account Alerts"
                                      >
                                        Account Alerts
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/transfernow"
                                        title="TransferNow"
                                      >
                                        TransferNow
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/card-management"
                                        title="Card Management"
                                      >
                                        Card Management
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/ways-to-pay"
                                    title="Ways to Pay"
                                  >
                                    Ways to Pay
                                  </a>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/ways-to-pay/apple-pay"
                                        title="Apple Pay"
                                      >
                                        Apple Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/ways-to-pay/google-pay"
                                        title="Google Pay"
                                      >
                                        Google Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/ways-to-pay/samsung-pay"
                                        title="Samsung Pay"
                                      >
                                        Samsung Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/ways-to-pay/visa-click-to-pay"
                                        title="Visa Click to Pay"
                                      >
                                        Visa Click to Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/ways-to-pay/paypal"
                                        title="PayPal"
                                      >
                                        PayPal
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Education
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Banking Education
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/resource-center"
                                        title="Banking Resource Center"
                                      >
                                        Banking Resource Center
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/resource-center?type%5B0%5D=391"
                                        title="Product Education Videos"
                                      >
                                        Product Education Videos
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/cybersecurity-for-consumers"
                                        title="Cybersecurity Guide for Consumers"
                                      >
                                        Cybersecurity Guide for Consumers
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="pinn-menu-blocks pinn-menu-blocks--mobile">
                          <ul className="pinn-menu-blocks-items">
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                Open a Free Checking Account Today
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Our most popular account for managing day-to-day
                                finances
                              </p>
                              <a
                                data-navigation="personal banking"
                                data-style="btn_yellow"
                                href="/personal-banking/checking/free-checking"
                                className="pinn-menu-blocks-item-link"
                              >
                                Open in Minutes
                              </a>
                            </li>
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                Apply Now for a Home Loan
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Get one step closer to your dream home
                              </p>
                              <a
                                data-navigation="personal borrowing"
                                data-style="btn_yellow"
                                href="/personal-borrowing/mortgage-loans"
                                className="pinn-menu-blocks-item-link"
                              >
                                Get Started
                              </a>
                            </li>
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                Make the Smart Move, Open a CD
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Earn a higher return and start growing your
                                savings
                              </p>
                              <a
                                data-navigation="personal investing"
                                data-style="btn_yellow"
                                href="/personal-investing/cd"
                                className="pinn-menu-blocks-item-link"
                              >
                                Get the Details
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="page-header__tabs-tab-menu page-header__tabs-tab-menu-business page-header__tabs-tab-menu-inactive">
                  <div className="page-header__tabs-tab-menu-wrpper">
                    <nav className="pinn-menu">
                      <ul className="pinn-menu-wrapper">
                        <li className="pinn-menu-left-column">
                          <ul className="pinn-menu-list">
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Banking
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Products
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/checking"
                                        title="Checking"
                                      >
                                        Checking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/money-market"
                                        title="Money market"
                                      >
                                        Money market
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/zero-balance-account"
                                        title="Zero Balance Account"
                                      >
                                        Zero Balance Account
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/debit-card"
                                        title="Visa Debit Card"
                                      >
                                        Visa Debit Card
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/credit-cards"
                                        title="Credit Cards"
                                      >
                                        Credit Cards
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Borrowing
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Business Loans
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-borrowing/loans-and-lines-of-credit"
                                        title="Loans and Lines of Credit"
                                      >
                                        Loans and Lines of Credit
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="https://www.pinnbank.com/find-a-person?type=lender"
                                        title="Find a Commercial Lender"
                                      >
                                        Find a Commercial Lender
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Agricultural Loans
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-borrowing/agricultural-loans/operating"
                                        title="Operating Loans and Lines"
                                      >
                                        Operating Loans and Lines
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-borrowing/agricultural-loans/equipment"
                                        title="Equipment Loans"
                                      >
                                        Equipment Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-borrowing/agricultural-loans/livestock"
                                        title="Livestock Loans"
                                      >
                                        Livestock Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-borrowing/agricultural-loans/real-estate"
                                        title="Real Estate Loans"
                                      >
                                        Real Estate Loans
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Investing
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Products
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-investing/business-cds"
                                        title="Business CDs"
                                      >
                                        Business CDs
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu-blocks pinn-menu-blocks--desktop">
                              <ul className="pinn-menu-blocks-items">
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    More Bank for Your Business
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Our Business Accounts come in a variety of
                                    shapes and sizes
                                  </p>
                                  <a
                                    data-navigation="business banking"
                                    data-style="btn_yellow"
                                    href="/business-banking/checking"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Get the Details
                                  </a>
                                </li>
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    Apply for a Business Loan
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Find the right kind of loan to reach your
                                    business goals
                                  </p>
                                  <a
                                    data-navigation="business borrowing"
                                    data-style="btn_yellow"
                                    href="/business-borrowing/loans-and-lines-of-credit"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Get Started
                                  </a>
                                </li>
                                <li className="pinn-menu-blocks-item">
                                  <h3 className="pinn-menu-blocks-item-title">
                                    Manage your Cash
                                  </h3>
                                  <p className="pinn-menu-blocks-item-description">
                                    Our Treasury Management Services make it
                                    easy to manage your business's funds
                                  </p>
                                  <a
                                    data-navigation="business investing"
                                    data-style="btn_yellow"
                                    href="/business-banking/treasury-management"
                                    className="pinn-menu-blocks-item-link"
                                  >
                                    Get the Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="pinn-menu-right-column">
                          <ul className="pinn-menu-list">
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Treasury Management
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/business-banking/treasury-management"
                                    title="Services"
                                  >
                                    Services
                                  </a>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/ach-origination-service"
                                        title="ACH Origination"
                                      >
                                        ACH Origination
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/merchant-card-processing"
                                        title="Merchant Payment Solutions"
                                      >
                                        Merchant Payment Solutions
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/remote-deposit-capture"
                                        title="Remote Deposit Capture"
                                      >
                                        Remote Deposit Capture
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/positive-pay"
                                        title="Positive Pay"
                                      >
                                        Positive Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/lockbox"
                                        title="Lockbox Payment Processing"
                                      >
                                        Lockbox Payment Processing
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/insured-cash-sweep"
                                        title="IntraFi Deposit Account"
                                      >
                                        IntraFi Deposit Account
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/zescrow"
                                        title="ZEscrow"
                                      >
                                        ZEscrow
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-cash-management/zrent"
                                        title="ZRent"
                                      >
                                        ZRent
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Ways to Bank
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/pinnbank-for-business"
                                        title="Online Banking"
                                      >
                                        Online Banking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/account-alerts"
                                        title="Account Alerts"
                                      >
                                        Account Alerts
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/business-bill-pay"
                                        title="Bill Pay"
                                      >
                                        Bill Pay
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/mobile-business-banking"
                                        title="Mobile Business Banking"
                                      >
                                        Mobile Business Banking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="https://www.pinnbank.com/business-banking/business-premium"
                                        title="Business Premium"
                                      >
                                        Business Premium
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/card-valet"
                                        title="Card Valet"
                                      >
                                        Card Valet
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Education
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    Business Education
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/resource-center"
                                        title="Banking Resource Center"
                                      >
                                        Banking Resource Center
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/cybersecurity-for-business"
                                        title="Cybersecurity Guide for Business"
                                      >
                                        Cybersecurity Guide for Business
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="https://www.pinnbank.com/resource-center?type%5B0%5D=391"
                                        title="Product Education Videos"
                                      >
                                        Product Education Videos
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="pinn-menu-blocks pinn-menu-blocks--mobile">
                          <ul className="pinn-menu-blocks-items">
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                More Bank for Your Business
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Our Business Accounts come in a variety of
                                shapes and sizes
                              </p>
                              <a
                                data-navigation="business banking"
                                data-style="btn_yellow"
                                href="/business-banking/checking"
                                className="pinn-menu-blocks-item-link"
                              >
                                Get the Details
                              </a>
                            </li>
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                Apply for a Business Loan
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Find the right kind of loan to reach your
                                business goals
                              </p>
                              <a
                                data-navigation="business borrowing"
                                data-style="btn_yellow"
                                href="/business-borrowing/loans-and-lines-of-credit"
                                className="pinn-menu-blocks-item-link"
                              >
                                Get Started
                              </a>
                            </li>
                            <li className="pinn-menu-blocks-item">
                              <h3 className="pinn-menu-blocks-item-title">
                                Manage your Cash
                              </h3>
                              <p className="pinn-menu-blocks-item-description">
                                Our Treasury Management Services make it easy to
                                manage your business's funds
                              </p>
                              <a
                                data-navigation="business investing"
                                data-style="btn_yellow"
                                href="/business-banking/treasury-management"
                                className="pinn-menu-blocks-item-link"
                              >
                                Get the Details
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="page-header__search page-header__search-mobile">
                <form method="GET" role="search" action="/site-search">
                  <label htmlFor="mobile-search" className="visually-hidden">
                    Search
                  </label>
                  <input
                    id="mobile-search"
                    name="search"
                    type="text"
                    className="aa-SearchBox-input"
                    placeholder="Search"
                  />
                  <button className="aa-SearchBox-submit" type="submit" />
                </form>
              </div>
            </div>
          </header>
          <div>
            <div data-drupal-messages-fallback="" className="hidden" />
          </div>
          <main role="main">
            <a id="main-content" tabIndex={-1} />
            <div className="layout-content">
              <div>
                <div id="block-pinnbank-content">
                  <article about="/node/1">
                    <div>
                      <div className="paragraph paragraph--type--full-width-hero paragraph--view-mode--default full-width-hero">
                        <div className="full-width-hero__inner">
                          <div className="full-width-hero__img-gradient">
                            <div className="full-width-hero__img-wrapper">
                              <img
                                loading="lazy"
                                src="/media/red-barn.jpg"
                                width={1500}
                                height={500}
                                alt="red barn in the snow"
                                typeof="foaf:Image"
                              />
                            </div>
                            <div className="full-width-hero__wrapper">
                              <div className="full-width-hero__content">
                                <div className="full-width-hero__content-contain">
                                  <h1 className="!font-montserrat">
                                    Maximize Your Benefits with a Health Savings
                                    Account
                                  </h1>
                                  <div className="full-width-hero__description !font-montserrat md:text-[28px] !text-[20px]">
                                    If you are enrolled in a High Deductible
                                    Health Plan for 2025, you can save for
                                    future medical expenses with tax free
                                    dollars that roll over year after year with
                                    an HSA!
                                  </div>
                                  <Link
                                    data-datalayer-headline="Maximize Your Benefits with a Health Savings Account"
                                    className="link__btn-yellow !font-montserrat !text-white"
                                    href="/login"
                                  >
                                    LOGIN
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="paragraph paragraph--type--square-blocks paragraph--view-mode--default square-blocks">
                        <div className="square-blocks__wrapper">
                          <h2 className="font-montserrat">How Can We Help?</h2>
                          {/* <div className="square-blocks__items bg-red-400 border border-red-400">
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Lost or Stolen Cards"
                              data-datalayer-button_text="Get Help"
                              className="square-blocks__item"
                              href="/contact"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={35}
                                  height={24}
                                  viewBox="0 0 35 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.5 23.75H2.5C1.119 23.75 0 22.6311 0 21.25V2.5C0 1.12012 1.119 0 2.5 0H32.5C33.88 0 35 1.12012 35 2.5V21.25C35 22.6311 33.88 23.75 32.5 23.75ZM33.75 2.5C33.75 1.81006 33.19 1.25 32.5 1.25H2.5C1.80899 1.25 1.25 1.81006 1.25 2.5V3.75H33.75V2.5ZM33.75 8.75H1.25V21.25C1.25 21.9412 1.80899 22.5 2.5 22.5H32.5C33.19 22.5 33.75 21.9412 33.75 21.25V8.75ZM27.5 16.25H31.25V20H27.5V16.25ZM15.625 17.5H4.375C4.02899 17.5 3.75 17.2212 3.75 16.875C3.75 16.53 4.02899 16.25 4.375 16.25H15.625C15.97 16.25 16.25 16.53 16.25 16.875C16.25 17.2212 15.97 17.5 15.625 17.5ZM4.375 18.75H10.625C10.97 18.75 11.25 19.03 11.25 19.375C11.25 19.7212 10.97 20 10.625 20H4.375C4.02899 20 3.75 19.7212 3.75 19.375C3.75 19.03 4.02899 18.75 4.375 18.75Z"
                                    fill="#4D6D7A"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Lost or Stolen Cards
                              </h3>
                              <div className="square-blocks__more">
                                <span>Get Help</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Open an Account"
                              data-datalayer-button_text="Get Started"
                              className="square-blocks__item"
                              href="/personal-banking/open-account"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={42}
                                  height={42}
                                  viewBox="0 0 42 42"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M27.9529 39.2605L21.866 40.9995L23.6051 34.9126L36.6524 21.8667L41.0003 26.2146L27.9529 39.2605Z"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M33.1743 25.3455L37.5221 29.6933"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M23.6052 34.9131L27.9531 39.2609"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M17.522 37.5217H4.47897C2.56598 37.5217 1 35.9567 1 34.0436V6.21771H7.95697"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.6529 34.0436H4.479V9.69568H7.95724"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M28.8265 17.5219V6.21771H21.87"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M18.392 4.47869C18.392 3.03777 17.522 0.999695 14.913 0.999695C12.305 0.999695 11.435 3.03778 11.435 4.47869H7.957V11.4347H21.87V4.47869H18.392Z"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M21.87 9.69568H25.3482V17.5216"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.69603 16.6523H18.3917"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.69603 20.1306H18.3917"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.69603 23.6089H18.3917"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.69603 27.0872H14.9134"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Open an Account
                              </h3>
                              <div className="square-blocks__more">
                                <span>Get Started</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Product Advisor"
                              data-datalayer-button_text="Try It"
                              className="square-blocks__item"
                              href="/find-banking-options"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={37}
                                  height={37}
                                  viewBox="0 0 37 37"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.5 36.9997C8.28298 36.9997 0 28.7177 0 18.4997C0 8.28265 8.28299 -0.000305176 18.5 -0.000305176C28.717 -0.000305176 37 8.28265 37 18.4997C37 28.7177 28.717 36.9997 18.5 36.9997ZM29.662 31.5427C26.759 29.0187 23.316 28.0456 23.267 28.0327L23.134 27.9968L23.027 27.9116C19.772 25.3066 21.569 22.0576 22.881 19.6838C23.103 19.2817 23.321 18.8886 23.51 18.5107C24.635 16.2607 24.168 15.1337 24.164 15.1218L24.062 14.8896L24.135 14.6327C24.578 13.3036 24.901 9.11271 23.036 7.09855C22.015 5.99552 20.427 5.70573 18.314 6.23258L18.155 6.2526C15.844 6.2526 14.199 6.90861 13.266 8.20157C11.381 10.8107 12.821 15.2497 12.835 15.2936L12.904 15.5026L12.834 15.7116C12.31 17.2877 13.325 18.3285 13.335 18.3385L13.397 18.4096C13.573 18.6437 17.663 24.1957 13.996 27.8627L13.91 27.9496L12.788 28.4467C10.214 29.5846 8.49498 30.3466 7.12097 31.3456C10.153 34.0336 14.129 35.6786 18.5 35.6786C22.765 35.6786 26.658 34.1156 29.662 31.5426L29.662 31.5427ZM18.5 1.32171C9.01199 1.32171 1.32099 9.01264 1.32099 18.4997C1.32099 23.1386 3.16799 27.3398 6.15598 30.4306C7.69599 29.2617 9.55999 28.4287 12.254 27.2368L13.145 26.8427C15.752 24.0808 12.638 19.6137 12.36 19.2277C12.113 18.9597 10.943 17.5456 11.517 15.5036C11.223 14.5078 10.148 10.2665 12.191 7.43256C13.375 5.78876 15.354 4.9477 18.073 4.93061C20.653 4.30659 22.646 4.73165 24.006 6.20063C26.289 8.66669 25.898 13.1926 25.457 14.8227C25.627 15.3996 25.826 16.8337 24.691 19.1018C24.494 19.4956 24.268 19.9047 24.037 20.3237C22.508 23.0886 21.66 25.0436 23.753 26.7976C24.491 27.0165 27.809 28.1157 30.65 30.6447C33.757 27.5356 35.678 23.2426 35.678 18.4997C35.678 9.01265 27.987 1.32172 18.5 1.32172L18.5 1.32171Z"
                                    fill="#4D6D7A"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Product Advisor
                              </h3>
                              <div className="square-blocks__more">
                                <span>Try It</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Customer Service"
                              data-datalayer-button_text="Learn More"
                              className="square-blocks__item"
                              href="/contact"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={40}
                                  height={40}
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.8749 11.9855C16.4239 10.4355 16.4239 7.92231 14.8749 6.3725L10.6639 2.16254C9.1149 0.612487 6.6019 0.612487 5.05091 2.16254L2.7419 4.47235C0.73891 6.4743 0.4289 9.5993 1.99091 11.9623C8.6989 22.1044 17.6479 31.0524 27.7899 37.7604C30.1479 39.3205 33.2819 39.0095 35.2799 37.0095L37.5899 34.7004C39.1389 33.1503 39.1389 30.6374 37.5899 29.0873L33.3799 24.8774C31.8299 23.3283 29.3169 23.3283 27.7659 24.8774L26.3629 26.2814C21.7469 22.4975 17.2539 18.0053 13.4709 13.3874L14.8749 11.9855Z"
                                    stroke="#4C7D8C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Customer Service
                              </h3>
                              <div className="square-blocks__more">
                                <span>Learn More</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="FDIC Insurance"
                              data-datalayer-button_text="Learn More"
                              className="square-blocks__item"
                              href="https://www.pinnbank.com/articles/2021/FDIC"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={62}
                                  height={7}
                                  viewBox="0 0 62 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <rect
                                    width={62}
                                    height={7}
                                    fill="url(#pattern0)"
                                  />
                                  <defs>
                                    <pattern
                                      id="pattern0"
                                      patternContentUnits="objectBoundingBox"
                                      width={1}
                                      height={1}
                                    >
                                      <use
                                        xlinkHref="#image0_34_3369"
                                        transform="translate(0 -0.0176252) scale(0.012987 0.115028)"
                                      />
                                    </pattern>
                                    <image
                                      id="image0_34_3369"
                                      width={77}
                                      height={9}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAJCAYAAAB3wKHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAADuUlEQVRIiZXWechnYxQH8I/x0kyWRDIhx2PUyDoJSZTtD2NXylZGY8kS8QeyC1kissQ7ZElZ3jCY7DHUpGRrbFNTeBxFY0kmQmMGf9znpzvXOzM5dbv3nvM953yfc89znrteiViMl2rm5XpSInbAfIzXzPEScTFOsbosqJlXl4g7sA8OqpkrBnGewcqaeUKJmImJZlqBJbipZi5t2EXYZJDjDCzFop7fN7ivZr42wCoRE5g5UF+EvQb8v8ZjNXNi4HtrzXy/vR+IG9vaVuJVXDiGPVBKxC01c3kv6DnYFdPb+zZ4B+M9zE+jfNgbx+PxHom9cRw+bqpp7Tqh3U9tRLZv9t1wMr7t5fgcY5iBA7Ah9seCErFTzfxqUKCZuAfv93QVx/T4b9jWdl2JOKRmntXz3bhxn637wJfgUGyEm3HmWAMvxBzc1Rym4jS8NCC0rGYuNrnMx7l6RcN5eAVb93S/j2KUiC9wdomYWjP/aPYlw0KUiM2wqpf73RJxqq7Iq2GbfD7kWSKG/N8tEc/hsxJxcM1c2MNOwd24uGbOa+rfcDrdF4T7cGeJuLtm/o0T8R6+HJCZXiJm9d6/rpmjbpuPe0rE7jXz4xKxha7LzsAVPZ9pLcbURuLpXsFg51Yk0Fvkek0/puu4GbrtPZls3I+B5ZOBauZPJeIJHKtrnJHsotthD03mNyra69gAB+JNXYfcgIMG+GOxb+/9aixozyvwoG5bn4O5eAE/DGJsh0d0W2Q6rhzYb2uxRjKr3TfVddWmuhk3t2Z+Mdmi8KRuBo0k1oCjm237DXRb6hriz8kcxqBm/lUi5uHcEvFrW8wL/lu08Zp57VoI3I/FJeIyXeHmYP0BZmnNnAUlYiu8UyKW1My3mv3wSeYULK+Zm5WI27FjzXxqLTyO7MXTcq0Jux2WDXQ/YNsSMVYzVw4dpvSeH8ZsXI8HauaqtZCaVGpmxdt4FL/VzEXrwH+HD7Hn/0hzHfYtEYf9X35DKRGb4yQ8OzB9iu/9929BiZg22p5q5o8l4lndPJu7hjzDmbaiZg7nyjiex/lriDGaaaNTcLbuWB/JzoN5tAz/zrya+XOJuEo3g3cb/uKsQ0b8N9Cdnpfi+Zr5Zh9UM/8uEedjonXohO60vwDHjOGjHv5e3TYYHfnf4Jfe8ylWn2nf4nDdkT4ati/iDV23wa+6GQS/t+sR3dz6CkfUzA+a/ROrF5DuIzzWbCN5AEfhaDw9wC9tOYcy5J+4pv+f1vetmS+XiKMbnwexCm/h5H8AwNVo8wpeCH4AAAAASUVORK5CYII="
                                    />
                                  </defs>
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                FDIC Insurance
                              </h3>
                              <div className="square-blocks__more">
                                <span>Learn More</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Buying a Home"
                              data-datalayer-button_text="Learn More"
                              className="square-blocks__item"
                              href="/personal-borrowing/mortgage-loans"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={46}
                                  height={44}
                                  viewBox="0 0 46 44"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M35.9994 42.6167C39.1604 40.3208 44.5104 35.4678 44.5104 31.8396C44.5104 28.8987 42.3674 27.1396 40.2964 27.1396C37.9924 27.1396 37.1354 28.7288 35.9974 30.6077C34.8594 28.7288 34.0023 27.1396 31.6984 27.1396C29.6274 27.1396 27.4844 28.8987 27.4844 31.8396C27.4844 35.4678 32.8344 40.3208 35.9974 42.6167H35.9994Z"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.9934"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.6748 21.8086V42.6172H27.4834"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.9934"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 20.8626L22.7544 1L44.5088 20.8626"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.9934"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M30.3213 2.8916H36.9422V9.51245"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.9934"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="19.917"
                                    y="10.458"
                                    width="5.67506"
                                    height="5.67506"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.9934"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Buying a Home
                              </h3>
                              <div className="square-blocks__more">
                                <span>Learn More</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Find a Branch"
                              data-datalayer-button_text="Locate Now"
                              className="square-blocks__item"
                              href="/location-search"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={49}
                                  height={48}
                                  viewBox="0 0 49 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.8964 11.0001V43.0001"
                                    stroke="#4C7D8C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M29.8964 21.0001V1.00012"
                                    stroke="#4C7D8C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M27.896 34.4287L15.896 43L1.896 33V1L15.896 11L29.896 1L43.896 11V21"
                                    stroke="#4C7D8C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M47.896 33C47.896 37.418 39.896 47 39.896 47C39.896 47 31.896 37.418 31.896 33C31.896 28.5818 35.476 25 39.896 25C44.315 25 47.896 28.5818 47.896 33Z"
                                    stroke="#4C7D8C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <circle
                                    cx="39.8964"
                                    cy="33.0001"
                                    r={3}
                                    stroke="#4C7D8C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Find a Branch
                              </h3>
                              <div className="square-blocks__more">
                                <span>Locate Now</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Apply for an Auto Loan"
                              data-datalayer-button_text="Apply Now"
                              className="square-blocks__item"
                              href="/personal-borrowing/auto-loans"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={33}
                                  height={22}
                                  viewBox="0 0 33 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2.33423"
                                    y="18.345"
                                    width="4.00269"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="26.3503"
                                    y="18.345"
                                    width="4.00269"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="11.6738"
                                    y="15.6765"
                                    width="9.33961"
                                    height="4.00269"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M21.0138 18.3453H31.6877V13.0084L27.685 9.00568H5.00309L1.0004 13.0084V18.3453H11.6742"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M25.0158 0.999695H7.67084L5.00238 9.00506H27.6843L25.0158 0.999695Z"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x={1}
                                    y="6.33691"
                                    width="4.00269"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="27.6846"
                                    y="6.33691"
                                    width="4.00269"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x={1}
                                    y="13.0081"
                                    width="5.33692"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="26.3503"
                                    y="13.0081"
                                    width="5.33692"
                                    height="2.66846"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.3436 13.0081V11.6738"
                                    stroke="#4D6D7A"
                                    strokeWidth="1.33423"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Apply for an Auto Loan
                              </h3>
                              <div className="square-blocks__more">
                                <span>Apply Now</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              data-external={0}
                              data-datalayer-event="click"
                              data-datalayer-event_type="Square Blocks"
                              data-datalayer-headline="Educational Resources"
                              data-datalayer-button_text="Read More"
                              className="square-blocks__item"
                              href="/resource-center"
                            >
                              <div className="square-blocks__icon">
                                <svg
                                  width={38}
                                  height={30}
                                  viewBox="0 0 38 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.06044 10.827L3.09953 13.7877H0L2.50143 15.6012L1.59533 18.525L4.06043 16.8226L6.52552 18.525L5.61944 15.6012L8.12089 13.7877H5.02134L4.06044 10.827Z"
                                    fill="#4C7D8C"
                                  />
                                  <path
                                    d="M5.02135 24.6157L4.06044 21.655L3.09953 24.6157H0L2.50143 26.4292L1.59533 29.353L4.06043 27.6506L6.52552 29.353L5.61944 26.4292L8.12089 24.6157H5.02135Z"
                                    fill="#4C7D8C"
                                  />
                                  <path
                                    d="M11.504 4.99102H37.221C37.595 4.99102 37.897 4.68804 37.897 4.31402C37.897 3.94 37.595 3.63702 37.221 3.63702H11.504C11.13 3.63702 10.828 3.94 10.828 4.31402C10.828 4.68804 11.13 4.99102 11.504 4.99102Z"
                                    fill="#4C7D8C"
                                  />
                                  <path
                                    d="M37.221 14.465H11.504C11.13 14.465 10.828 14.768 10.828 15.142C10.828 15.516 11.13 15.8181 11.504 15.8181H37.221C37.595 15.8181 37.897 15.5161 37.897 15.142C37.897 14.768 37.595 14.465 37.221 14.465Z"
                                    fill="#4C7D8C"
                                  />
                                  <path
                                    d="M37.221 25.293H11.504C11.13 25.293 10.828 25.5959 10.828 25.97C10.828 26.344 11.13 26.646 11.504 26.646H37.221C37.595 26.646 37.897 26.344 37.897 25.97C37.897 25.5959 37.595 25.293 37.221 25.293Z"
                                    fill="#4C7D8C"
                                  />
                                  <path
                                    d="M4.06044 0L3.09953 2.96069H0L2.50143 4.77417L1.59533 7.698L4.06043 5.99561L6.52552 7.698L5.61944 4.77417L8.12089 2.96069H5.02134L4.06044 0Z"
                                    fill="#4C7D8C"
                                  />
                                </svg>
                              </div>
                              <h3 className="square-blocks__header">
                                Educational Resources
                              </h3>
                              <div className="square-blocks__more">
                                <span>Read More</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 8 16"
                                >
                                  <path
                                    fill="#4D6D7A"
                                    fillRule="evenodd"
                                    d="M.485.087h.001l7.333 7.615h-.001c.049.051.079.119.079.195 0 .076-.03.145-.079.195l.001.001-7.333 7.615-.001-.001a.2816.2816 0 0 1-.203.0871.2823.2823 0 0 1-.282-.282c0-.0761.031-.144.08-.1951H.079l7.145-7.4199L.079.4781.08.477A.2787.2787 0 0 1 0 .282.283.283 0 0 1 .282 0c.08 0 .152.034.203.087Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div> */}
                          <Slider />
                        </div>
                      </div>
                      <div className="paragraph paragraph--type--grid-cards paragraph--view-mode--default grid-cards">
                        <div className="grid-cards__wrapper">
                          <h2 className="font-montserrat">
                            Explore the possibilities with Pinnacle Bank.
                          </h2>
                          <p className="grid-cards__sub-heading !font-montserrat">
                            Learn more about how our people, products and
                            services can help you take the next step in your
                            financial journey.
                          </p>
                          <section className="grid-cards__section !font-montserrat">
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1224_PHOTOTILE_AG.jpg"
                                  width={300}
                                  height={400}
                                  alt="Farmer standing in their field looking at the horizon"
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer !font-montserrat">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  Ag Loans
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Get ready for your 2025 season by speaking
                                  with a local Ag Lender.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Ag Loans"
                                  className="link__default !font-montserrat"
                                  href="/business-borrowing/agricultural-loans/operating"
                                >
                                  Learn More
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Ag Loans"
                                  className="link__default grid-cards__card-link"
                                  href="/business-borrowing/agricultural-loans/operating"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1224_PHOTOTILE_MERCHANT.jpg"
                                  width={300}
                                  height={400}
                                  alt="Someone using their phone to pay at the merchant station. "
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  Merchant Payment Solutions
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Grow your business with powerful point of sale
                                  and other business tools.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Merchant Payment Solutions"
                                  className="link__default !font-montserrat"
                                  href="/business-cash-management/merchant-card-processing"
                                >
                                  Learn More
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Merchant Payment Solutions"
                                  className="link__default grid-cards__card-link"
                                  href="/business-cash-management/merchant-card-processing"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1224_PHOTOTILE_CARDMANAGEMENT.jpg"
                                  width={300}
                                  height={400}
                                  alt="A lady looking at her card while shopping. "
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  Card Management
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Skip the scams and stick to your holiday
                                  budget with our card tools in our mobile
                                  banking app.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Card Management"
                                  className="link__default !font-montserrat"
                                  href="/personal-banking/card-management"
                                >
                                  Learn More
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Card Management"
                                  className="link__default grid-cards__card-link"
                                  href="/personal-banking/card-management"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1124_PHOTOTILE_PINNDOCS.jpg"
                                  width={300}
                                  height={400}
                                  alt="A girl sitting and smiling at her computer. "
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  PinnDocs Electronic Statements and Notices
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Save time and stay secure with our always free
                                  and available electronic statements.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="PinnDocs Electronic Statements and Notices"
                                  className="link__default !font-montserrat"
                                  href="/personal-banking/online-statements"
                                >
                                  Enroll Today
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="PinnDocs Electronic Statements and Notices"
                                  className="link__default grid-cards__card-link"
                                  href="/personal-banking/online-statements"
                                >
                                  Enroll Today
                                </a>
                              </div>
                            </div>
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1224_PHOTOTILE_FRAUDBLOG.jpg"
                                  width={300}
                                  height={400}
                                  alt="A picture of a shield in a tech style"
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  Identity Theft Protection for Business
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Safeguard your business from identity theft
                                  risks—learn about common threats and get
                                  actionable security tips in our latest
                                  Business Fraud Bulletin.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Identity Theft Protection for Business"
                                  className="link__default !font-montserrat"
                                  href="/articles/2024/business-identity-theft"
                                >
                                  Read More
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Identity Theft Protection for Business"
                                  className="link__default grid-cards__card-link !font-montserrat"
                                  href="/articles/2024/business-identity-theft"
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                            <div className="grid-cards__card">
                              <div className="grid-cards__image-filter" />
                              <div className="grid-cards__image">
                                <img
                                  loading="lazy"
                                  src="/media/1224_PHOTOTILE_NEWSLETTER.jpg"
                                  width={300}
                                  height={400}
                                  alt="A lady typing on her laptop"
                                  typeof="foaf:Image"
                                />
                              </div>
                              <div className="grid-cards__outLayer">
                                <h2 className="grid-cards__card-heading !font-montserrat !font-medium">
                                  Don’t Let Scams Spoil Your Holiday Season
                                </h2>
                                <p className="grid-cards__card-sub-heading !font-montserrat">
                                  Have a happier holiday by avoiding scams that
                                  could compromise your finances and privacy.
                                </p>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Don’t Let Scams Spoil Your Holiday Season "
                                  className="link__default !font-montserrat"
                                  href="/articles/2024/holiday-scams"
                                >
                                  Read more
                                </a>
                                <a
                                  data-external={0}
                                  data-datalayer-event="click"
                                  data-datalayer-event_type="Grid Cards"
                                  data-datalayer-headline="Don’t Let Scams Spoil Your Holiday Season "
                                  className="link__default grid-cards__card-link"
                                  href="/articles/2024/holiday-scams"
                                >
                                  Read more
                                </a>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div className="paragraph paragraph--type--tabbed-content-slider paragraph--view-mode--default tabbed-content-slider">
                        <div className="tabbed-content-slider__wrapper">
                          <h2 className="tabbed-content-slider__heading">
                            Get More From Our Helpful Products and Services
                          </h2>
                          <BankingTabs />
                          {/* <ul className="tabbed-content-slider__tabs">
                            <li className="tabbed-content-slider__tab">
                              <a
                                href=""
                                className="tabbed-content-slider__tab-link"
                                data-tab-index={0}
                              >
                                <div className="tabbed-content-slider__tab-icon">
                                  <svg
                                    width={27}
                                    height={46}
                                    viewBox="0 0 27 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.37988 26.8691C9.37988 29.0322 11.1309 30.7852 13.2959 30.7852C15.4579 30.7852 17.2089 29.0322 17.2089 26.8691C17.2089 24.7073 15.4579 22.9522 13.2959 22.9522C11.1309 22.9522 9.37988 21.1992 9.37988 19.0361C9.37988 16.8752 11.1309 15.1201 13.2959 15.1201C15.4579 15.1201 17.2089 16.8752 17.2089 19.0361"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.2969 30.7861V33.3964"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.2969 12.5078V15.1201"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <rect
                                      x={1}
                                      y={1}
                                      width="24.5919"
                                      height="43.5088"
                                      rx="3.78337"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.5919 8.56738H1"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.5919 36.9424H1"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.56641 4.7832H18.0248"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.2416 40.7263C14.2416 41.2493 13.8186 41.6721 13.2956 41.6721V41.6721C12.7726 41.6721 12.3506 41.2493 12.3506 40.7263V40.7263C12.3506 40.2031 12.7726 39.7803 13.2956 39.7803V39.7803C13.8186 39.7803 14.2416 40.2031 14.2416 40.7263Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__tab-title">
                                  Mobile and Online Banking
                                </h3>
                              </a>
                            </li>
                            <li className="tabbed-content-slider__tab">
                              <a
                                href=""
                                className="tabbed-content-slider__tab-link"
                                data-tab-index={1}
                              >
                                <div className="tabbed-content-slider__tab-icon">
                                  <svg
                                    width={35}
                                    height={35}
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.02198 18.2167C7.60598 18.2167 8.89098 16.9318 8.89098 15.3469C8.89098 13.7619 7.60598 12.4777 6.02198 12.4777C4.43697 12.4777 3.15198 13.7619 3.15198 15.3469C3.15198 16.9318 4.43697 18.2167 6.02198 18.2167Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M6.021 21.0857H11.043C11.043 24.9067 10.684 27.5427 8.173 28.1887V33.9995H6.02099H3.869V28.1887C1.358 27.5427 1 24.9067 1 21.0857H6.021Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M28.978 18.2167C30.563 18.2167 31.847 16.9318 31.847 15.3469C31.847 13.7619 30.563 12.4777 28.978 12.4777C27.393 12.4777 26.108 13.7619 26.108 15.3469C26.108 16.9318 27.393 18.2167 28.978 18.2167Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M28.978 21.0857H34C34 24.9067 33.641 27.5427 31.13 28.1887V33.9995H28.978H26.826V28.1887C24.315 27.5427 23.956 24.9067 23.956 21.0857H28.978Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M17.5 6.7387C19.084 6.7387 20.369 5.45379 20.369 3.86883C20.369 2.28387 19.084 0.999695 17.5 0.999695C15.915 0.999695 14.63 2.28387 14.63 3.86883C14.63 5.45379 15.915 6.7387 17.5 6.7387Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M17.5 9.60767H22.521C22.521 13.4287 22.163 16.0647 19.652 16.7097V22.5205H17.5H15.347V16.7097C12.837 16.0647 12.478 13.4287 12.478 9.60767H17.5Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__tab-title">
                                  Business Banking
                                </h3>
                              </a>
                            </li>
                            <li className="tabbed-content-slider__tab">
                              <a
                                href=""
                                className="tabbed-content-slider__tab-link"
                                data-tab-index={2}
                              >
                                <div className="tabbed-content-slider__tab-icon">
                                  <svg
                                    width={56}
                                    height={35}
                                    viewBox="0 0 56 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M54.1598 7.94995L40.3865 17.1321H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 12.541L40.3865 21.7231H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 17.132L40.3865 26.3143H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 21.723L40.3865 30.9054H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M28.9086 33.2004H12.8398V11.3928L26.6131 1.06299H42.6819L28.9086 11.3928V33.2004Z"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 17.132H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 21.723H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 26.3143H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 30.9054H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M39.2388 3.35901H54.1598L40.3865 12.5411H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8395 12.5411H1.36182L15.1351 3.35901H23.1694"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M20.874 27.462V29.7576"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M20.874 11.3932V13.6887"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M17.4308 24.0188C17.4308 25.9199 18.9728 27.4619 20.8738 27.4619C22.7748 27.4619 24.3178 25.9199 24.3178 24.0188C24.3178 22.1169 22.7748 20.575 20.8738 20.575C18.9728 20.575 17.4308 19.033 17.4308 17.1318C17.4308 15.23 18.9728 13.689 20.8738 13.689C22.7748 13.689 24.3178 15.23 24.3178 17.1318"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__tab-title">
                                  Savings and Investments
                                </h3>
                              </a>
                            </li>
                            <li className="tabbed-content-slider__tab">
                              <a
                                href=""
                                className="tabbed-content-slider__tab-link"
                                data-tab-index={3}
                              >
                                <div className="tabbed-content-slider__tab-icon">
                                  <svg
                                    width={40}
                                    height={46}
                                    viewBox="0 0 40 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.9359 1H19.903C16.038 5.80005 9.1969 7.70996 1 1.98486V30.0039C1 30.0039 3.74597 39.9761 19.917 44.509C36.093 39.9761 38.834 30.0039 38.834 30.0039V1.98486C30.687 7.67505 23.8039 5.81299 19.9359 1Z"
                                      stroke="#4D6D7A"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M31.3348 16.1143L19.9181 32.6313L11.2578 23.9692"
                                      stroke="#4D6D7A"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__tab-title">
                                  Preventing Fraud and Scams
                                </h3>
                              </a>
                            </li>
                          </ul>
                          <div className="tabbed-content-slider__slides">
                            <div className="tabbed-content-slider__slide">
                              <div className="tabbed-content-slider__slide-header">
                                <div className="tabbed-content-slider__slide-icon">
                                  <svg
                                    width={27}
                                    height={46}
                                    viewBox="0 0 27 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.37988 26.8691C9.37988 29.0322 11.1309 30.7852 13.2959 30.7852C15.4579 30.7852 17.2089 29.0322 17.2089 26.8691C17.2089 24.7073 15.4579 22.9522 13.2959 22.9522C11.1309 22.9522 9.37988 21.1992 9.37988 19.0361C9.37988 16.8752 11.1309 15.1201 13.2959 15.1201C15.4579 15.1201 17.2089 16.8752 17.2089 19.0361"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.2969 30.7861V33.3964"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.2969 12.5078V15.1201"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <rect
                                      x={1}
                                      y={1}
                                      width="24.5919"
                                      height="43.5088"
                                      rx="3.78337"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.5919 8.56738H1"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.5919 36.9424H1"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.56641 4.7832H18.0248"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.2416 40.7263C14.2416 41.2493 13.8186 41.6721 13.2956 41.6721V41.6721C12.7726 41.6721 12.3506 41.2493 12.3506 40.7263V40.7263C12.3506 40.2031 12.7726 39.7803 13.2956 39.7803V39.7803C13.8186 39.7803 14.2416 40.2031 14.2416 40.7263Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__slide-title">
                                  Mobile and Online Banking
                                </h3>
                              </div>
                              <div className="tabbed-content-slider__slide-content">
                                <div className="tabbed-content-slider__slide-media">
                                  <img
                                    loading="lazy"
                                    src="/sites/default/files/styles/product_article/public/2022-08/MOBILE_BANKING.jpg?itok=L0MCJMTz"
                                    width={420}
                                    height={200}
                                    alt="young man using a smart phone"
                                    typeof="foaf:Image"
                                  />
                                </div>
                                <h4 className="tabbed-content-slider__slide-heading">
                                  <span>
                                    Bank On Your Own Terms with Mobile and
                                    Online Banking Options
                                  </span>
                                </h4>
                                <div className="tabbed-content-slider__slide-text">
                                  Mobile and online banking options like online
                                  bill pay, contactless payments and remote
                                  deposits let you bank remotely at your
                                  convenience.
                                </div>
                                <div className="tabbed-content-slider__slide-link">
                                  <a
                                    data-external={0}
                                    data-style="btn_yellow"
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Bank On Your Own Terms with Mobile and Online Banking Options"
                                    href="/personal-banking/mobile-banking"
                                  >
                                    Explore
                                  </a>
                                </div>
                              </div>
                              <ul className="tabbed-content-slider__slide-points">
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Online Banking lets you do everything, right
                                    from the comfort of your own compu…
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Online Banking lets you do everything, right from the comfort of your own compu…"
                                    className="link__default"
                                    href="/personal-banking/online-banking"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Learn How to Build Good Spending Habits
                                    Online
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Learn How to Build Good Spending Habits Online"
                                    className="link__default"
                                    href="/blog/five-tips-for-good-spending-habits-online"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Looking for an Easy Way to Send Money to
                                    Family and Friends? Try Zelle®
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Looking for an Easy Way to Send Money to Family and Friends? Try Zelle®"
                                    className="link__default"
                                    href="/zelle"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Deposit Checks On The Go With Mobile Deposit
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Deposit Checks On The Go With Mobile Deposit"
                                    className="link__default"
                                    href="/mobile-deposit"
                                  >
                                    Explore
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="tabbed-content-slider__slide">
                              <div className="tabbed-content-slider__slide-header">
                                <div className="tabbed-content-slider__slide-icon">
                                  <svg
                                    width={35}
                                    height={35}
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.02198 18.2167C7.60598 18.2167 8.89098 16.9318 8.89098 15.3469C8.89098 13.7619 7.60598 12.4777 6.02198 12.4777C4.43697 12.4777 3.15198 13.7619 3.15198 15.3469C3.15198 16.9318 4.43697 18.2167 6.02198 18.2167Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M6.021 21.0857H11.043C11.043 24.9067 10.684 27.5427 8.173 28.1887V33.9995H6.02099H3.869V28.1887C1.358 27.5427 1 24.9067 1 21.0857H6.021Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M28.978 18.2167C30.563 18.2167 31.847 16.9318 31.847 15.3469C31.847 13.7619 30.563 12.4777 28.978 12.4777C27.393 12.4777 26.108 13.7619 26.108 15.3469C26.108 16.9318 27.393 18.2167 28.978 18.2167Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M28.978 21.0857H34C34 24.9067 33.641 27.5427 31.13 28.1887V33.9995H28.978H26.826V28.1887C24.315 27.5427 23.956 24.9067 23.956 21.0857H28.978Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M17.5 6.7387C19.084 6.7387 20.369 5.45379 20.369 3.86883C20.369 2.28387 19.084 0.999695 17.5 0.999695C15.915 0.999695 14.63 2.28387 14.63 3.86883C14.63 5.45379 15.915 6.7387 17.5 6.7387Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M17.5 9.60767H22.521C22.521 13.4287 22.163 16.0647 19.652 16.7097V22.5205H17.5H15.347V16.7097C12.837 16.0647 12.478 13.4287 12.478 9.60767H17.5Z"
                                      stroke="#4C7D8C"
                                      strokeWidth="1.5"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__slide-title">
                                  Business Banking
                                </h3>
                              </div>
                              <div className="tabbed-content-slider__slide-content">
                                <div className="tabbed-content-slider__slide-media">
                                  <img
                                    loading="lazy"
                                    src="/sites/default/files/styles/product_article/public/2022-08/BUSINESS_BANKING.jpg?itok=vsRaKwY8"
                                    width={420}
                                    height={200}
                                    alt="woman using a computer"
                                    typeof="foaf:Image"
                                  />
                                </div>
                                <h4 className="tabbed-content-slider__slide-heading">
                                  <span>
                                    Better Business Banking Starts Here
                                  </span>
                                </h4>
                                <div className="tabbed-content-slider__slide-text">
                                  Owning a business is challenging, but there
                                  are ways to make business banking easier,
                                  especially online. We have helpful treasury
                                  management and remote deposit tools, as well
                                  as information on cybersecurity and commercial
                                  lending.
                                </div>
                                <div className="tabbed-content-slider__slide-link">
                                  <a
                                    data-external={0}
                                    data-style="btn_yellow"
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Better Business Banking Starts Here"
                                    href="/business-banking/treasury-management"
                                  >
                                    Get Info
                                  </a>
                                </div>
                              </div>
                              <ul className="tabbed-content-slider__slide-points">
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Online Banking Versus Mobile Banking Apps
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Online Banking Versus Mobile Banking Apps"
                                    className="link__default"
                                    href="/blog/online-vs-mobile-banking"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Use Remote Deposit Capture for Simpler,
                                    Faster Deposits
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Use Remote Deposit Capture for Simpler, Faster Deposits"
                                    className="link__default"
                                    href="/business-cash-management/remote-deposit-capture"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Get Peace of Mind with Our Secure Treasury
                                    Management Services, like Insured Ca…
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Get Peace of Mind with Our Secure Treasury Management Services, like Insured Ca…"
                                    className="link__default"
                                    href="/business-banking/cash-management-services"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Remote Banking Means Your Business Needs
                                    Online Security
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Remote Banking Means Your Business Needs Online Security"
                                    className="link__default"
                                    href="/business-banking/cybersecurity-for-business"
                                  >
                                    Explore
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="tabbed-content-slider__slide">
                              <div className="tabbed-content-slider__slide-header">
                                <div className="tabbed-content-slider__slide-icon">
                                  <svg
                                    width={56}
                                    height={35}
                                    viewBox="0 0 56 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M54.1598 7.94995L40.3865 17.1321H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 12.541L40.3865 21.7231H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 17.132L40.3865 26.3143H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M54.1598 21.723L40.3865 30.9054H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M28.9086 33.2004H12.8398V11.3928L26.6131 1.06299H42.6819L28.9086 11.3928V33.2004Z"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 17.132H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 21.723H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 26.3143H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8397 30.9054H1.36194"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M39.2388 3.35901H54.1598L40.3865 12.5411H28.9088"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.8395 12.5411H1.36182L15.1351 3.35901H23.1694"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M20.874 27.462V29.7576"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M20.874 11.3932V13.6887"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M17.4308 24.0188C17.4308 25.9199 18.9728 27.4619 20.8738 27.4619C22.7748 27.4619 24.3178 25.9199 24.3178 24.0188C24.3178 22.1169 22.7748 20.575 20.8738 20.575C18.9728 20.575 17.4308 19.033 17.4308 17.1318C17.4308 15.23 18.9728 13.689 20.8738 13.689C22.7748 13.689 24.3178 15.23 24.3178 17.1318"
                                      stroke="#4D6D7A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__slide-title">
                                  Savings and Investments
                                </h3>
                              </div>
                              <div className="tabbed-content-slider__slide-content">
                                <div className="tabbed-content-slider__slide-media">
                                  <img
                                    loading="lazy"
                                    src="/sites/default/files/styles/product_article/public/2022-08/SAVEFORYOURFUTURE.jpg?itok=IIxy38qi"
                                    width={420}
                                    height={200}
                                    alt="man and woman with a puppy"
                                    typeof="foaf:Image"
                                  />
                                </div>
                                <h4 className="tabbed-content-slider__slide-heading">
                                  <span>
                                    Saving Your Money has Never Been Simpler
                                  </span>
                                </h4>
                                <div className="tabbed-content-slider__slide-text">
                                  Anytime is a great time to start saving money
                                  to invest later. Read our helpful information
                                  on how to start saving up for your retirement,
                                  dream home, business, car, and more.
                                </div>
                                <div className="tabbed-content-slider__slide-link">
                                  <a
                                    data-external={0}
                                    data-style="btn_yellow"
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Saving Your Money has Never Been Simpler"
                                    href="/personal-banking/savings"
                                  >
                                    See More
                                  </a>
                                </div>
                              </div>
                              <ul className="tabbed-content-slider__slide-points">
                                <li className="tabbed-content-slider__slide-point">
                                  <p>Put CD Laddering to Work for You</p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Put CD Laddering to Work for You"
                                    className="link__default"
                                    href="https://www.pinnbank.com/articles/2023/cd-laddering"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Here's How to Start Saving For Business
                                    Success
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Here's How to Start Saving For Business Success"
                                    className="link__default"
                                    href="/blog/setting-up-your-business"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Start Investing in Your Wellbeing by Opening
                                    a Health Savings Account
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Start Investing in Your Wellbeing by Opening a Health Savings Account"
                                    className="link__default"
                                    href="/personal-investing/hsa"
                                  >
                                    Explore
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="tabbed-content-slider__slide">
                              <div className="tabbed-content-slider__slide-header">
                                <div className="tabbed-content-slider__slide-icon">
                                  <svg
                                    width={40}
                                    height={46}
                                    viewBox="0 0 40 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.9359 1H19.903C16.038 5.80005 9.1969 7.70996 1 1.98486V30.0039C1 30.0039 3.74597 39.9761 19.917 44.509C36.093 39.9761 38.834 30.0039 38.834 30.0039V1.98486C30.687 7.67505 23.8039 5.81299 19.9359 1Z"
                                      stroke="#4D6D7A"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M31.3348 16.1143L19.9181 32.6313L11.2578 23.9692"
                                      stroke="#4D6D7A"
                                      strokeWidth="1.9934"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <h3 className="tabbed-content-slider__slide-title">
                                  Preventing Fraud and Scams
                                </h3>
                              </div>
                              <div className="tabbed-content-slider__slide-content">
                                <div className="tabbed-content-slider__slide-media">
                                  <img
                                    loading="lazy"
                                    src="/sites/default/files/styles/product_article/public/2022-08/PROTECTYOURSELFFROMFRAUD.jpg?itok=-wVzfkTq"
                                    width={420}
                                    height={200}
                                    alt="padlock"
                                    typeof="foaf:Image"
                                  />
                                </div>
                                <h4 className="tabbed-content-slider__slide-heading">
                                  <span>
                                    Protect Yourself From Financial Fraud and
                                    Scams
                                  </span>
                                </h4>
                                <div className="tabbed-content-slider__slide-text">
                                  In a world of online banking, fraud and scams
                                  can happen at any time. Learn how to protect
                                  yourself from fraudulent scammers using our
                                  helpful information.
                                </div>
                                <div className="tabbed-content-slider__slide-link">
                                  <a
                                    data-external={0}
                                    data-style="btn_yellow"
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Protect Yourself From Financial Fraud and Scams"
                                    href="https://www.pinnbank.com/personal-banking/cybersecurity-for-consumers"
                                  >
                                    Find out More
                                  </a>
                                </div>
                              </div>
                              <ul className="tabbed-content-slider__slide-points !bg-black">
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Remote Banking Options Have Made
                                    Cybersecurity Even More Essential
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Remote Banking Options Have Made Cybersecurity Even More Essential"
                                    className="link__default"
                                    href="/personal-banking/cybersecurity-for-consumers"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Learn How to Spot Fraudulent Emails Before
                                    It's Too Late
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Learn How to Spot Fraudulent Emails Before It's Too Late"
                                    className="link__default"
                                    href="/blog/how-to-spot-fraudulent-emails"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Avoid Check Fraud By Transferring Money or
                                    Paying Online
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Avoid Check Fraud By Transferring Money or Paying Online"
                                    className="link__default"
                                    href="/blog/check-fraud"
                                  >
                                    Explore
                                  </a>
                                </li>
                                <li className="tabbed-content-slider__slide-point">
                                  <p>
                                    Know What's Happening With Your Money The
                                    Moment It Occurs
                                  </p>
                                  <a
                                    data-external={0}
                                    data-datalayer-event="click"
                                    data-datalayer-event_type="Tabbed Content Slider"
                                    data-datalayer-headline="Know What's Happening With Your Money The Moment It Occurs"
                                    className="link__default"
                                    href="/resource/video/account-alerts"
                                  >
                                    Explore
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="page-footer">
              <div className="page-footer__wrapper">
                <div className="page-footer__inner">
                  <div className="page-footer__columns">
                    <div className="page-footer__left">
                      <ul className="page-footer__social-links page-footer__social-links-mobile">
                        <li className="page-footer__social-links-item">
                          <a
                            title="Facebook"
                            href="https://www.facebook.com/pinnbank"
                            data-external={1}
                          >
                            <svg
                              width={28}
                              height={28}
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M26.0181 0H1.73389C1.27449 0.00158142 0.834612 0.184798 0.509766 0.509644C0.18492 0.834489 0.00158142 1.27461 0 1.73401V26.019C0.00158142 26.4784 0.18492 26.9185 0.509766 27.2433C0.834612 27.5682 1.27449 27.7514 1.73389 27.753H26.0181C26.4776 27.7517 26.9181 27.5686 27.2432 27.2437C27.5682 26.9188 27.7513 26.4786 27.7529 26.019V1.73401C27.7513 1.27444 27.5682 0.834152 27.2432 0.509277C26.9181 0.184403 26.4776 0.00131789 26.0181 0ZM19.0801 8.67297H17.3462C15.8722 8.67297 15.6113 8.67297 15.6113 12.142H19.0801V15.611H15.6113V22.549H12.1421V15.611H8.67334V12.142H12.1421C12.1421 9.48597 12.1423 5.20398 17.3423 5.20398H19.0762L19.0801 8.67297Z"
                                fill="white"
                              />
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </a>
                        </li>
                        <li className="page-footer__social-links-item">
                          <a
                            title="Twitter"
                            href="https://www.twitter.com/pinnbank"
                            data-external={1}
                          >
                            {/* <Image
                              src={'/media/twitterx.svg'}
                              alt="TwitterX"
                              width={50}
                              height={50}
                            /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                            </svg>
                            <span className="visually-hidden">Twitter</span>
                          </a>
                        </li>
                        <li className="page-footer__social-links-item">
                          <a
                            title="LinkedIn"
                            href="https://www.linkedin.com/company/pinnbank/"
                            data-external={1}
                          >
                            <svg
                              width={28}
                              height={28}
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_3550_3178)">
                                <path
                                  d="M0 1.98759C0 0.889734 0.912281 0 2.03789 0H25.7121C26.8377 0 27.75 0.889734 27.75 1.98759V25.7624C27.75 26.8603 26.8377 27.75 25.7121 27.75H2.03789C0.912281 27.75 0 26.8603 0 25.7624V1.98759ZM8.57302 23.2302V10.6994H4.40878V23.2302H8.57302ZM6.49177 8.98753C7.94344 8.98753 8.84705 8.02669 8.84705 6.82303C8.82103 5.59336 7.94517 4.65853 6.51952 4.65853C5.09386 4.65853 4.1625 5.59509 4.1625 6.82303C4.1625 8.02669 5.06611 8.98753 6.46402 8.98753H6.49177V8.98753ZM15.0041 23.2302V16.232C15.0041 15.8574 15.0318 15.4828 15.1428 15.2157C15.4429 14.4682 16.128 13.6929 17.2796 13.6929C18.7868 13.6929 19.3886 14.841 19.3886 16.5269V23.2302H23.5528V16.043C23.5528 12.1927 21.4993 10.4028 18.759 10.4028C16.5494 10.4028 15.5591 11.6168 15.0041 12.4719V12.5153H14.9763C14.9855 12.5008 14.9948 12.4863 15.0041 12.4719V10.6994H10.8416C10.8936 11.8753 10.8416 23.2302 10.8416 23.2302H15.0041Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3550_3178">
                                  <rect
                                    width="27.75"
                                    height="27.75"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="visually-hidden">LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                      <span className="pinn-menu__footer-toggler">
                        More Info
                      </span>
                      <div className="pinn-menu__footer">
                        <nav className="pinn-menu pinn-menu__alt">
                          <ul>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Company
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item !font-montserrat">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/company/about-us"
                                    title="About Us"
                                  >
                                    About Us
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/careers"
                                    title="Careers"
                                  >
                                    Careers
                                  </a>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="https://health1.aetna.com/app/public/#/one/insurerCode=AETNACVS_I&brandCode=ALICSI/machine-readable-transparency-in-coverage?searchTerm=102896004&lock=true"
                                        title="Benefits MRF"
                                        data-external={1}
                                      >
                                        Benefits MRF
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/resource/document/surprise-medical-bills-notice"
                                        title="Surprise Medical Bills Notice"
                                      >
                                        Surprise Medical Bills Notice
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/contact/routing-number"
                                    title="Routing Number 104913912"
                                  >
                                    Routing Number 104913912
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Resource Center
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/resource-center?type%5B0%5D=376"
                                    title="Documents"
                                  >
                                    Documents
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/resource-center?type%5B0%5D=381"
                                    title="In the News"
                                  >
                                    In the News
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/resource-center?type%5B0%5D=386"
                                    title="Stories"
                                  >
                                    Stories
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="https://www.pinnbank.com/resource-center?type%5B0%5D=391"
                                    title="Videos"
                                  >
                                    Videos
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                Products
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    PERSONAL
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/checking"
                                        title="Checking"
                                      >
                                        Checking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-banking/savings"
                                        title="Savings"
                                      >
                                        Savings
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/mortgage-loans"
                                        title="Mortgage Loans"
                                      >
                                        Mortgage Loans
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/personal-borrowing/make-a-payment"
                                        title="Make a Loan Payment"
                                      >
                                        Make a Loan Payment
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pinn-menu__item">
                                  <span className="pinn-menu__item-link !font-montserrat">
                                    BUSINESS
                                  </span>
                                  <ul className="pinn-menu__children">
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/checking"
                                        title="Checking"
                                      >
                                        Checking
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/money-market"
                                        title="Money Market"
                                      >
                                        Money Market
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/debit-card"
                                        title="Visa Debit Card"
                                      >
                                        Visa Debit Card
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/credit-cards"
                                        title="Credit Cards"
                                      >
                                        Credit Cards
                                      </a>
                                    </li>
                                    <li className="pinn-menu__item">
                                      <a
                                        className="pinn-menu__item-link !font-montserrat"
                                        href="/business-banking/treasury-management"
                                        title="Treasury Management"
                                      >
                                        Treasury Management
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <a
                                href="/contact"
                                title="Customer Service"
                                className="pinn-menu__item-link !font-montserrat"
                              >
                                Customer Service
                              </a>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/location-search"
                                    title="Find a Branch"
                                  >
                                    Find a Branch
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/find-a-person"
                                    title="Find a Person"
                                  >
                                    Find a Person
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="pinn-menu__item">
                              <span className="pinn-menu__item-link !font-montserrat">
                                COMMUNITY
                              </span>
                              <ul className="pinn-menu__children">
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/locations/nebraska"
                                    title="Nebraska"
                                  >
                                    Nebraska
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/locations/missouri"
                                    title="Missouri"
                                  >
                                    Missouri
                                  </a>
                                </li>
                                <li className="pinn-menu__item">
                                  <a
                                    className="pinn-menu__item-link !font-montserrat"
                                    href="/locations/kansas"
                                    title="Kansas"
                                  >
                                    Kansas
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="page-footer__right">
                      <ul className="page-footer__social-links">
                        <li className="page-footer__social-links-item">
                          <a
                            title="Facebook"
                            href="https://www.facebook.com/pinnbank"
                            data-external={1}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                            </svg>
                            <span className="visually-hidden">Facebook </span>
                          </a>
                        </li>
                        <li className="page-footer__social-links-item">
                          <a
                            title="Twitter"
                            href="https://www.twitter.com/pinnbank"
                            data-external={1}
                          >
                            <svg
                              width={28}
                              height={28}
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_3547_2879)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1.98214 0C0.887436 0 0 0.887436 0 1.98214V25.5201C0 26.6148 0.887436 27.5022 1.98214 27.5022H25.5201C26.6148 27.5022 27.5022 26.6148 27.5022 25.5201V1.98214C27.5022 0.887436 26.6148 0 25.5201 0H1.98214ZM11.1759 14.6709L4.69456 6.00476H9.68989L13.9389 11.6861L19.1977 6.00476H20.6657L14.5948 12.5633L21.4408 21.7169H16.4455L11.8318 15.548L6.12153 21.7169H4.65364L11.1759 14.6709ZM9.14808 7.08602H6.85322L16.987 20.6355H19.2818L9.14808 7.08602Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3547_2879">
                                  <rect
                                    width="27.75"
                                    height="27.75"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="visually-hidden">Twitter </span>
                          </a>
                        </li>
                        <li className="page-footer__social-links-item">
                          <a
                            title="LinkedIn"
                            href="https://www.linkedin.com/company/pinnbank/"
                            data-external={1}
                          >
                            <svg
                              width={28}
                              height={28}
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_3550_3178)">
                                <path
                                  d="M0 1.98759C0 0.889734 0.912281 0 2.03789 0H25.7121C26.8377 0 27.75 0.889734 27.75 1.98759V25.7624C27.75 26.8603 26.8377 27.75 25.7121 27.75H2.03789C0.912281 27.75 0 26.8603 0 25.7624V1.98759ZM8.57302 23.2302V10.6994H4.40878V23.2302H8.57302ZM6.49177 8.98753C7.94344 8.98753 8.84705 8.02669 8.84705 6.82303C8.82103 5.59336 7.94517 4.65853 6.51952 4.65853C5.09386 4.65853 4.1625 5.59509 4.1625 6.82303C4.1625 8.02669 5.06611 8.98753 6.46402 8.98753H6.49177V8.98753ZM15.0041 23.2302V16.232C15.0041 15.8574 15.0318 15.4828 15.1428 15.2157C15.4429 14.4682 16.128 13.6929 17.2796 13.6929C18.7868 13.6929 19.3886 14.841 19.3886 16.5269V23.2302H23.5528V16.043C23.5528 12.1927 21.4993 10.4028 18.759 10.4028C16.5494 10.4028 15.5591 11.6168 15.0041 12.4719V12.5153H14.9763C14.9855 12.5008 14.9948 12.4863 15.0041 12.4719V10.6994H10.8416C10.8936 11.8753 10.8416 23.2302 10.8416 23.2302H15.0041Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3550_3178">
                                  <rect
                                    width="27.75"
                                    height="27.75"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="visually-hidden">LinkedIn </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section__wrapper">
                <div className="footer-section__inner">
                  <div className="footer-section__copyright">
                    ©2024 Pinnacle Bank
                  </div>
                  <ul className="footer-section__links !font-montserrat">
                    <li className="footer-section__links-link !font-montserrat">
                      <a href="/legal" className="!font-montserrat">
                        Legal/Privacy
                      </a>
                    </li>
                    <li className="footer-section__links-link">
                      <a
                        href="https://www.pinnbank.com/sitemap"
                        className="!font-montserrat"
                      >
                        Sitemap
                      </a>
                    </li>
                  </ul>
                  <ul className="footer-section__logos">
                    <li className="footer-section__logos-logo">
                      <img
                        src="/media/MEMBER%201_6.png?itok=GBdPinPC"
                        alt="Equal Housing Lender"
                        typeof="foaf:Image"
                      />
                    </li>
                    <li className="footer-section__logos-logo">
                      <a href="https://www.fdic.gov/">
                        <img
                          src="/media/MEMBER%202_6.png?itok=c9k0P1YX"
                          alt="Member FDIC"
                          typeof="foaf:Image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="modal" data-modal="compliance">
            <div className="modal__underlay" />
            <div className="modal__content">
              <div className="modal__content-inner">
                <div className="modal__close">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.12793 24.2447L23.8648 1.50781"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.8648 24.2447L1.12793 1.50781"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="compliance-bumper" data-bumper="compliance">
                  <h3>Warning: External Link</h3>
                  <p>
                    You are leaving our website. The site you have chosen is
                    independent from Pinnacle Bank/Bank of Colorado. We do not
                    control external sites, and we cannot guarantee the
                    accuracy, completeness, efficacy or timeliness of the
                    information contained therein.
                  </p>
                  <div className="compliance-bumper__btns">
                    <button className="compliance-bumper__btn-back">
                      GO BACK
                    </button>
                    <a className="compliance-bumper__btn-link" href="#">
                      Continue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" data-modal="email-bumper">
            <div className="modal__underlay" />
            <div className="modal__content">
              <div className="modal__content-inner">
                <div className="modal__close">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.12793 24.2447L23.8648 1.50781"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.8648 24.2447L1.12793 1.50781"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="email-bumper" data-bumper="email-bumper">
                  <h3>Warning: Email Link</h3>
                  <p>
                    We are happy to provide email communications with our
                    customers, but please be advised that email is not a secure
                    method of communication and should not be used to transmit
                    sensitive information.
                  </p>
                  <div className="email-bumper__btns">
                    <button className="email-bumper__btn-back">GO BACK</button>
                    <a className="email-bumper__btn-link" href="mailto:#">
                      Continue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* link to web form hosted on Revation secure server */}
          <div className="chat-wrapper">
            <div id="chat-status" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
