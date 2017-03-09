package PSUtilities;

// -----( IS Java Code Template v1.2
// -----( CREATED: 2017-03-09 09:42:41 UTC
// -----( ON-HOST: 172.31.31.243

import com.wm.data.*;
import com.wm.util.Values;
import com.wm.app.b2b.server.Service;
import com.wm.app.b2b.server.ServiceException;
// --- <<IS-START-IMPORTS>> ---
// --- <<IS-END-IMPORTS>> ---

public final class object

{
	// ---( internal utility methods )---

	final static object _instance = new object();

	static object _newInstance() { return new object(); }

	static object _cast(Object o) { return (object)o; }

	// ---( server methods )---




	public static final void className (IData pipeline)
        throws ServiceException
	{
		// --- <<IS-START(className)>> ---
		// @sigtype java 3.5
		// [i] object:0:required object
		// [o] field:0:required name
		
		// pipeline
		IDataCursor pipelineCursor = pipeline.getCursor();
		Object object = IDataUtil.get(pipelineCursor, "object");
		
		pipelineCursor.insertAfter("name", object.getClass().getName());
		pipelineCursor.destroy();
		// --- <<IS-END>> ---

                
	}



	public static final void instanceOf (IData pipeline)
        throws ServiceException
	{
		// --- <<IS-START(instanceOf)>> ---
		// @sigtype java 3.5
		// [i] field:0:required class
		// [i] object:0:required object
		// [o] field:0:required instanceof
		
		// pipeline
		IDataCursor pipelineCursor = pipeline.getCursor();
		String class_1 = IDataUtil.getString(pipelineCursor, "class");
		Object object = IDataUtil.get(pipelineCursor, "object");
		
		pipelineCursor.insertAfter("instanceof", "" + (object.getClass().getName().equals(class_1)));
		pipelineCursor.destroy();
		// --- <<IS-END>> ---

                
	}
}

