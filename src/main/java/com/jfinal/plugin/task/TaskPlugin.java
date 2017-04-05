/**
 * @Title: TaskPlugin.java
 * @Package com.jfinal.plugin
 * @Description: TODO
 * Copyright: Copyright (c) 2016 
 * Company:青岛优米信息技术有限公司
 * 
 * @author qdum-ivy
 * @date 2016年9月13日 上午11:12:27
 * @version V1.0
 */

package com.jfinal.plugin.task;

import com.jfinal.kit.PropKit;
import com.jfinal.plugin.IPlugin;
import com.jfinal.plugin.redis.Redis;
import com.jfinal.plugin.task.support.JfinalTaskExecutor;

/**
  * @ClassName: TaskPlugin
  * @Description: TODO
  * @author qdum-ivy
  * @date 2016年9月13日 上午11:12:27
  *
  */

public class TaskPlugin implements IPlugin{

	private boolean isStarted = false;
	
	private JfinalTaskExecutor jfinalTaskExecutor;
	
	@Override
	public boolean start() {
		if (isStarted)
			return true;
		jfinalTaskExecutor = new JfinalTaskExecutor();
		
		jfinalTaskExecutor.setCorePoolSize(PropKit.getInt("task.core_pool_size"));
		jfinalTaskExecutor.setKeepAliveSeconds(PropKit.getInt("task.keep_alive_seconds"));
		jfinalTaskExecutor.setQueueCapacity(PropKit.getInt("task.queue_capacity"));
		jfinalTaskExecutor.setMaxPoolSize( PropKit.getInt("task.max_pool_size"));
		jfinalTaskExecutor.afterPropertiesSet();
		
		TaskKit.setTaskExecutor(jfinalTaskExecutor);
		isStarted = true;
		return true;
	}

	
	@Override
	public boolean stop() {
		jfinalTaskExecutor.shutdown();
		isStarted = false;
		return true;
	}

}
