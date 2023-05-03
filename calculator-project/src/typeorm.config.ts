import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Annonce } from '../annonces/annonces.entity';
import { Erreur } from '../erreur/erreur.entity';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'calculator',
    synchronize: true,

    entities: [Annonce, Erreur],
};