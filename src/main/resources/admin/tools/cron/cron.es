import {toStr} from '/lib/enonic/util';
import {parse} from '../../../../enonic-xp-lib-cron/src/main/resources/lib/cron/index.es';


export function get() {
    log.info(toStr({cron: parse('1 2 3 4 5')}));
    return {
        body: '<html><head></head><body><h1>Hello world!</h1></body></html>',
        contentType: 'text/html; charset=utf-8'
    };
}
