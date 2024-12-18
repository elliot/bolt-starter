"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { toast } from "sonner"

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div
        id="actions-menu"
        className="flex place-items-center justify-between border-b border-b-gray-200 px-6 py-3"
      >
        {/* TODO: Add actions menu */}
        <div id="actions-left" className="">
          {/* TODO: Add actions left */}
        </div>
        <div id="actions-right" className="flex items-center gap-2">
          {/* TODO: Add actions right */}
        </div>
      </div>
      <div id="content" className="">
        {/* TODO: Add content */}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="flex min-h-[100vh] flex-1 items-center justify-center rounded-xl bg-muted/50 md:min-h-min">
          <Button
            variant="outline"
            onClick={() => {
              toast("Your request was completed!", {
                description: "It was a long journey, but we made it!",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }}
          >
            Show Toast
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              toast("Event has been created")
            }}
          >
            Show Toast
          </Button>
        </div>
      </div>
    </>
  )
}
