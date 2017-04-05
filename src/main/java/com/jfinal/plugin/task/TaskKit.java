/**
 * @Title: TaskKit.java
 * @Package com.jfinal.plugin
 * @Description: TODO
 * Copyright: Copyright (c) 2016 
 * Company:青岛优米信息技术有限公司
 * 
 * @author qdum-ivy
 * @date 2016年9月13日 上午11:28:46
 * @version V1.0
 */

package com.jfinal.plugin.task;

import com.jfinal.plugin.task.support.JfinalTaskExecutor;

/**
  * @ClassName: TaskKit
  * @Description: TODO
  * @author qdum-ivy
  * @date 2016年9月13日 上午11:28:46
  *
  */

public class TaskKit {
	
	public static JfinalTaskExecutor taskExecutor;

	public static void setTaskExecutor(JfinalTaskExecutor taskExecutor) {
		TaskKit.taskExecutor = taskExecutor;
	}
}
