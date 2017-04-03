/**
 * Copyright (c) 2011-2015, James Zhan 詹波 (jfinal@126.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.jfinal.ext.render;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Random;
import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.swing.ImageIcon;

import org.apache.commons.io.FileUtils;

import com.jfinal.core.Controller;
import com.jfinal.kit.HashKit;
import com.jfinal.kit.StrKit;
import com.jfinal.render.Render;

/**
 * CaptchaRender
 */
public class MyCaptchaRender extends Render {
	
	private File file;
	
	public MyCaptchaRender(File file) {
		this.file = file;
	}
	
	public void render() {
		Image image = null;
		try {
			image = ImageIO.read(file);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		ImageIcon imageIcon = new ImageIcon(image);
		BufferedImage bufferedImage = new BufferedImage(imageIcon.getIconWidth(), imageIcon.getIconHeight(),
				BufferedImage.TYPE_INT_ARGB);// TYPE_4BYTE_ABGR
		Graphics2D g2D = (Graphics2D) bufferedImage.getGraphics();
		g2D.drawImage(imageIcon.getImage(), 0, 0, imageIcon.getImageObserver());
		response.setHeader("Pragma","no-cache");
        response.setHeader("Cache-Control","no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/png");
        
        ServletOutputStream sos = null;
        try {
			sos = response.getOutputStream();
			ImageIO.write(bufferedImage, "png",sos);
			g2D.dispose();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		finally {
			if (sos != null)
				try {sos.close();} catch (IOException e) {e.printStackTrace();}
		}
	}

}


