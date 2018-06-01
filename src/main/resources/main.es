import {parse} from '/lib/cron';
import {toStr} from '/lib/enonic/util';

log.info(toStr({cron: parse('1 2 3 4 5')}));
