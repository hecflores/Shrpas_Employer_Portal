package hello.helpers;

import java.beans.Introspector;
import java.beans.PropertyDescriptor;

/**
 * Created by Hector on 3/19/2017.
 */
public class PatchClasses {
    public static void PerformAPatch(Object MainObject, Object SettingObject) throws Exception{
        /*******************************************************************/
        /* Go through all get/set methods and update needed attributes     */
        /*******************************************************************/
        for (PropertyDescriptor propertyDescriptor : Introspector.getBeanInfo(MainObject.getClass()).getPropertyDescriptors()) {

            //Value setting
            Object AttributeSetting=propertyDescriptor.getReadMethod().invoke(SettingObject);

            if(propertyDescriptor.getWriteMethod()==null){
                continue;
            }
            //If it was specified by user update it
            if(AttributeSetting!=null)
            {

                propertyDescriptor.getWriteMethod().invoke(MainObject,AttributeSetting);
            }
        }
    }
}
