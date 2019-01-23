import React, { Component } from 'react';
import {
    ReactiveBase,
    DataSearch,
    SelectedFilters,
    ResultCard
} from '@appbaseio/reactivesearch';


class App extends Component {
    render() {
        return (
            <ReactiveBase
              app="projects"
              credentials="gVb4nx2bv:af509ee1-066b-4a3f-b1fb-a513779ef3a5"
            >
            <div>
        <div>
          <div id="yDmH0d" className="WPaXkf EWZcud cjGgHb d8Etdd LcUz9d ecJEib">
            <div className="WPaXkf EWZcud cjGgHb d8Etdd LcUz9d ecJEib">
            <c-wiz className="iK0UKe mCyoK">
              <c-wiz className="xoqcGf YjWc5e sYWWkc">
              <div className="Esvmme">
                <div className="SmZ4Wd omBice">
                  <div className="QtDoYb">
                    <div className="PQyHOe fIEMif">
                      <div className="mJ7Vpd">
                        <div className="BhpYt">
                          <div className="Aul2T m6aMje">
                            <div className="L6J0Pc VOEIyf LAL5ie cI2tlc">
                              <div className="d1dlne" style={{position: "relative"}}>
                                  <DataSearch
                                    className="yNVtPc ZAGvjd Ny5lGc"
                                    componentId="mainSearch"
                                    dataField={["tools", "tools.search","category", "category.search", "description.search", "language", "language.search","name", "name.search"]}
                                    queryFormat="and"
                                    placeholder="Search tool or framework ..."
                                    innerClass={{
                                      "input": "searchbox",
                                      "list": "suggestionlist"
                                    }}
                                    autosuggest={true}
                                    iconPosition="left"
                                    filterLabel="search"
                                  />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="NmWShc" jsname="OrKVr">
                          <div className="LS6A8c">
                            <div className="slH9Vc">
                              <div role="button" className="U26fgb c7fp5b FS4hgd LcqyIb m6aMje xE5EF">
                                <content className="I3EnF oJeWuf">
                                  <span className="NlWrkb snByac">
                                    Moses Surumen's Personal Projects
                                  </span>
                                </content>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </c-wiz>
              <div className="h8plyb Hnzzid">
                <c-wiz className="uGCjIb yDSiEe zcLWac eejsDc ZMOaid">
                  <div className="fv5Tgd">
                    <c-wiz>
                      <div className="Dfn0Z">
                        <div className="QUPHr">
                            <div className="z4bHUc eO2Zfd">
                              <SelectedFilters />
                              <ResultCard
                                componentId="projects"
                                dataField="name"
                                showResultStats={false}
                                react={{
                                  "and": ["mainSearch", "toolsFilter"]
                                }}
                                pagination={true}
                                size={8}
                                onData={(res)=>(
                                  {
                                    "description":(
                                      <div className="VfPpkd-WsjYwc VfPpkd-WsjYwc-OWXEXe-INsAgc KC1dQ Usd1Ac  HTXz8">
                                        <div className="tVYxKc">
                                          <div className="C96I0d">
                                            <div className="z8SUje" aria-hidden="true">
                                              <button className="VfPpkd-BIzmGd SaBhMc EYrTVd" style={{backgroundColor: res.buttonBg}}>
                                                <span className="VfPpkd-Q0XOV">
                                                  <svg width="24px" height="24px" style={{fill: res.color}} viewBox="0 0 24 24">
                                                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                                                  </svg>
                                                </span>
                                              </button>
                                            </div>{res.category}
                                          </div>
                                        </div>
                                        <div className="GDGBoc">
                                          <a href={res.url}>
                                            <div>
                                              <div className="BpKFdf" />
                                              <div className="zh9Tbe">
                                                <div className="mSbCD">{res.name}</div>
                                                <div className="Ecvatc">{res.description}</div>
                                              </div>
                                            </div>
                                          </a>
                                          <div className="V3UZb ajfOOe">
                                            <div className="hEcW3 TjP4pf">
                                              <button className="VfPpkd-LgbsSe ksBjEc">
                                                <span className="language">{res.tools}</span>
                                              </button>
                                            </div>
                                            <div className="hEcW3 U9bOZe">
                                              <a href={res.repo}>
                                                <button className="VfPpkd-Bz112c-LgbsSe material-icons-extended">
                                                  <svg width="16px" height="16px" className="v1262d JUQOtc" viewBox="0 0 24 24">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                                </button>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  }
                                )}
                                
                              />
                            </div>
                        </div>
                      </div>
                    </c-wiz>
                  </div>
                </c-wiz>
              </div>
            </c-wiz>
          </div>
          </div>
        </div>
        <div className="yMuq9d">
          <div className="VfPpkd-LgbsSe ksBjEc">
            <div className="homepage">
              <span>About Me</span>
              <a className="WpHeLc" href="https://surumen.com/" aria-label="Home Page" />
            </div>
          </div>
        </div>

      </div>
      </ReactiveBase>
        );
    }
}

export default App;