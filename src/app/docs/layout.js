import DocsNav from "@/components/docsNav/docsNav";
import SectionsNav from "@/components/docsNav/sectionsNav";
import BreadCrumb from "@/components/docsNav/breadcrumb";

export default function DocsLayout ({children}) {
    return (
        <div className="docs-page">
            <aside className="docs-sidebar docs-main-sidebar">
                <DocsNav/>
            </aside>
            <main className="docs-page-content">
                <BreadCrumb />
                {children}
            </main>
            <aside className="docs-sidebar docs-section-sidebar">
                <SectionsNav />
            </aside>
        </div>
    );
}
