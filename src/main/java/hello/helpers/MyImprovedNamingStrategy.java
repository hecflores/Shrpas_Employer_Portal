package hello.helpers;

import hello.Application;
import org.hibernate.cfg.ImprovedNamingStrategy;

/**
 * Created by Hector on 1/28/2017.
 */
public class MyImprovedNamingStrategy  extends ImprovedNamingStrategy
{
    private static final long serialVersionUID = 1L;
    private static final String PREFIX = "";

    @Override
    public String classToTableName(final String className) {
        Application.log.info("classToTableName(\""+className+"\")");
        return this.addPrefix(className)+"s";
    }



    @Override
    public String logicalCollectionTableName(final String tableName,
                                             final String ownerEntityTable, final String associatedEntityTable,
                                             final String propertyName) {
        Application.log.info("logicalCollectionTableName(\""+tableName+"\",\""+ownerEntityTable+"\",\""+associatedEntityTable+"\",\""+propertyName+"\")");
        return this.classToTableName(tableName);
    }

    @Override
    public String tableName(final String tableName)
    {
        Application.log.info("tableName(\""+tableName+"\")");
        return tableName;
    }
    private String addPrefix(final String composedTableName) {

        return PREFIX
                + composedTableName.replace("_", "");

    }

}
