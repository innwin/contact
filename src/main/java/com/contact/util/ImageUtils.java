package com.contact.util;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.swing.ImageIcon;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;

public class ImageUtils {

	public static void main(String[] args) throws MalformedURLException {

		try {

			fixImageSize(new File("/Users/mac-hc/test.jpg"));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	
	public static void fixImageSize(File file,Point p,Dimension d) {
		// ByteArrayOutputStream byteArrayOutputStream = new
		// ByteArrayOutputStream();
		try {
			Image image = ImageIO.read(file);
			ImageIcon imageIcon = new ImageIcon(image);
			BufferedImage bufferedImage = new BufferedImage(imageIcon.getIconWidth(), imageIcon.getIconHeight(),
					BufferedImage.TYPE_INT_ARGB);// TYPE_4BYTE_ABGR
			Graphics2D g2D = (Graphics2D) bufferedImage.getGraphics();
			g2D.drawImage(imageIcon.getImage(), 0, 0, imageIcon.getImageObserver());
			
			ImageReader reader = ImageIO.getImageReadersByMIMEType("image/png").next();
			reader.setInput(ImageIO.createImageInputStream(file), true);
			ImageReadParam param = reader.getDefaultReadParam();
			param.setSourceRegion(new Rectangle(p.x, p.y, d.width,d.height));
			BufferedImage bi = reader.read(0, param);
			ImageIO.write(bi, "png", file);
			g2D.dispose();
		} catch (

		Exception e) {
			e.printStackTrace();
		} finally {
		}

		// return byteArrayOutputStream.toByteArray();
	}
	
	public static void fixImageSize(File file) {
		// ByteArrayOutputStream byteArrayOutputStream = new
		// ByteArrayOutputStream();
		boolean f1 = false;
		boolean f2 = false;
		int ix1 = 0;
		int ix2 = 0;
		int iy1 = 0;
		int iy2 = 0;
		try {
			Image image = ImageIO.read(file);
			ImageIcon imageIcon = new ImageIcon(image);
			BufferedImage bufferedImage = new BufferedImage(imageIcon.getIconWidth(), imageIcon.getIconHeight(),
					BufferedImage.TYPE_INT_ARGB);// TYPE_4BYTE_ABGR
			Graphics2D g2D = (Graphics2D) bufferedImage.getGraphics();
			g2D.drawImage(imageIcon.getImage(), 0, 0, imageIcon.getImageObserver());
			all: for (int y1 = bufferedImage.getMinY(); y1 < bufferedImage.getHeight(); y1++) {
				for (int x1 = bufferedImage.getMinX(); x1 < bufferedImage.getWidth(); x1++) {
					int rgb = bufferedImage.getRGB(x1, y1);

					int alpha = (rgb & 0xFF000000) >> 24;
					int R = (rgb & 0xff0000) >> 16;
					int G = (rgb & 0xff00) >> 8;
					int B = (rgb & 0xff);
					if (alpha != 0) {
						// if(!(((255-R)<30) && ((255-G)<30) && ((255-B)<30))){
						// //去除白色背景；
						// if (!(((255 - R) > 160) && ((255 - G) > 160) && ((255
						// - B) > 160))) {// 去除黑色背景——dlgcy；
						if (!f1) {
							iy1 = y1;
							ix1 = x1;
							f1 = true;
						}
					}

					int x2 = bufferedImage.getWidth() - x1 - 1;
					int y2 = bufferedImage.getHeight() - y1 - 1;
					int rgb2 = bufferedImage.getRGB(x2, y2);

					int alpha2 = (rgb2 & 0xFF000000) >> 24;
					int R2 = (rgb2 & 0xff0000) >> 16;
					int G2 = (rgb2 & 0xff00) >> 8;
					int B2 = (rgb2 & 0xff);
					if (alpha2 != 0) {
						// if(!(((255-R2)<30) && ((255-G2)<30) &&
						// ((255-B2)<30))){
						// //去除白色背景；
						// if (!(((255 - R2) > 160) && ((255 - G2) > 160) &&
						// ((255 - B2) > 160))) {// 去除黑色背景——dlgcy；
						if (!f2) {
							iy2 = y2;
							ix2 = x2;
							f2 = true;
						}

					}

					if (f1 && f2) {
						break all;
					}
				}
			}
			ImageReader reader = ImageIO.getImageReadersByMIMEType("image/png").next();
			reader.setInput(ImageIO.createImageInputStream(file), true);
			ImageReadParam param = reader.getDefaultReadParam();
			param.setSourceRegion(new Rectangle(ix1, iy1, ix2 - ix1, iy2 - iy1));
			BufferedImage bi = reader.read(0, param);
			ImageIO.write(bi, "png", file);
			g2D.dispose();
		} catch (

		Exception e) {
			e.printStackTrace();
		} finally {
		}

		// return byteArrayOutputStream.toByteArray();
	}

}
