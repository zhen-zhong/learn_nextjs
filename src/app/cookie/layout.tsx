export default function CookieLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>cookie-layout</h1>
            <main>{children}</main>
        </div>
    );
}