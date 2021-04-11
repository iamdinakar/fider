import React from "react"
import { SideMenu, SideMenuToggler } from "./SideMenu"
import { IconType } from "react-icons"
import { PageTitle } from "@fider/components/common/layout"

export abstract class AdminBasePage<P, S> extends React.Component<P, S> {
  public abstract id: string
  public abstract name: string
  public abstract icon: IconType
  public abstract title: string
  public abstract subtitle: string
  public abstract content(): JSX.Element

  private toggleSideMenu = (active: boolean) => {
    const el = document.querySelector(".hidden-lg .c-side-menu") as HTMLElement
    if (el) {
      el.style.display = active ? "" : "none"
    }
  }

  public render() {
    return (
      <div id={this.id} className="page container">
        <PageTitle title={this.title} subtitle={this.subtitle} />
        <SideMenuToggler onToggle={this.toggleSideMenu} />

        <div className="row">
          <div className="col-lg-2 hidden-sm hidden-md">
            <SideMenu visible={true} activeItem={this.name} />
          </div>
          <div className="col-lg-10 col-md-12">
            <SideMenu className="hidden-lg hidden-xl" visible={false} activeItem={this.name} />
            {this.content()}
          </div>
        </div>
      </div>
    )
  }
}
