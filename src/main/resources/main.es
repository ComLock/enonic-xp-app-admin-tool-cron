import {toStr} from '/lib/enonic/util';
import {parse} from '../../../../enonic-xp-lib-cron/src/main/resources/lib/cron/index.es';

log.info(toStr({cron: parse('1 2 3 4 5')}));
