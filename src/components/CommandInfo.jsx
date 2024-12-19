import { MDXProvider } from "@mdx-js/react";
import { MdiCrown } from "./CustomIcons";

export default function CommandInfo({
  commandSyntax,
  commandDescription,
  requiresLinking = false,
  requiresPremium = false,
  note = null,
  args = null,
}) {
  return(
    <MDXProvider>
      <div>
        <h5 style={{display: "flex", gap: "6px", alignItems: "center"}}>
          {requiresPremium && <MdiCrown />}
          <code>{commandSyntax}</code>
        </h5>
        <p>{commandDescription} {requiresLinking && <i>(Requires Linking)</i>}</p>
        {note && <p><i><b>Note: </b>{note}</i></p>}

        {args && (
          <>
            <p>
              <strong>Arguments:</strong>
            </p>
            <ul>
              {args.map((arg, i) => (
                <li key={i}>
                  <strong>{arg.name}</strong>: {arg.description}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </MDXProvider>
  );
}
