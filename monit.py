import psutil
import commands
import time
def checkCpu(interval=1):
    if psutil.cpu_percent(interval) > 70:
        killProc()

def checkMem():
    phymem = psutil.virtual_memory()
    if phymem.percent > 70:
        killProc()

def killProc():
    commands.getstatusoutput('''ps -ef|grep phantomjs|grep -v grep | \
                                awk -F' ' '{print $2}' |xargs -I {} kill -9 {}''')

if __name__ == "__main__":
    while True:
        checkCpu()
        checkMem()
        time.sleep(3)