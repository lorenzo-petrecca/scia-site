export default function NotFound () {
    return (
        <div style={{width: "100%", height:"auto", display: "flex", flex: "1", alignItems: "center", justifyContent: "center"}}>
            <div className="scia-typo-bigger scia-typo-black scia-color-text">
                404
                <span
                    style={{borderLeft: "4px solid var(--scia-color-text)"}}
                    className="scia-typo-xxlarge scia-typo-medium scia-color-primary scia-padding-l-20 scia-margin-l-12"
                >
                    Not Found
                </span>
            </div>
        </div>
    );
}
