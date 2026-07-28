import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, value: controlledValue, onValueChange: controlledOnValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || "")
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
    
    const onValueChange = React.useCallback((newValue: string) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue)
      }
      controlledOnValueChange?.(newValue)
    }, [controlledValue, controlledOnValueChange])

    return (
      <TabsContext.Provider value={{ value, onValueChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900/80 p-1 text-zinc-400 border border-zinc-800",
        className
      )}
      {...props}
    />
  )
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, onClick, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsTrigger must be used within Tabs")
    
    const isSelected = context.value === value

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      context.onValueChange(value)
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isSelected}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          isSelected
            ? "bg-zinc-800 text-white shadow-sm border border-zinc-700/60"
            : "hover:text-zinc-200 hover:bg-zinc-800/40",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsContent must be used within Tabs")

    if (context.value !== value) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn(
          "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
