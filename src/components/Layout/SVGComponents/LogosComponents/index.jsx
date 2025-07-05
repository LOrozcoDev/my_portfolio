import { HTMLogo } from "./HTMLogo";
import { CSSLogo } from "./CSSLogo";
import { JSLogo } from "./JSLogo";
import { PHPLogo } from "./PHPLogo";
import { MySQLogo } from "./MySQLogo";
import { WordpressLogo } from "./WordpressLogo";
import { JqueryLogo } from "./JqueryLogo";
import { LaravelLogo } from "./LaravelLogo";
import { BootstrapLogo } from "./BootstrapLogo";
import { SassLogo } from "./SassLogo";
import { TailwindLogo } from "./TailwindLogo";
import { ReactLogo } from "./ReactLogo";
import { NodeLogo } from "./NodeLogo";
import { GitLogo } from "./GitLogo";
import { PythonLogo } from "./PythonLogo";
import { MongoLogo } from "./MongoLogo";
function LogosComponents({ type }) {
    const logosList = {
        html: <HTMLogo />,
        css: <CSSLogo />,
        javascript: <JSLogo />,
        php: <PHPLogo />,
        mysql: <MySQLogo />,
        wordpress: <WordpressLogo />,
        jquery: <JqueryLogo />,
        laravel: <LaravelLogo />,
        sass: <SassLogo />,
        bootstrap: <BootstrapLogo />,
        tailwind: <TailwindLogo />,
        react: <ReactLogo />,
        git: <GitLogo />,
        node: <NodeLogo />,
        python: <PythonLogo />,
        mongo: <MongoLogo/>
        
    }
    return logosList[type];
}

export{LogosComponents}