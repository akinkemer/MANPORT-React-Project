export function JobDto(jobName,prodName,countryName,appName,issueTime,impactStatus) {
    this.jobName = jobName;
    this.prodName = prodName;
    this.countryName = countryName;
    this.appName = appName;
    this.issueTime = issueTime;
    this.impactStatus = impactStatus;
}
function findAllJobDto(apps) {
    const jobDtos=[];
    apps.forEach(app => {
        app.countries.forEach((country) => {
            country.productions.forEach((production,index) => {
                if (production.name === undefined) production.name = `PROD-${index + 1}`;
                production.jobs.forEach((job,index) => {
                    if(job.name===null) job.name=`Job${index+1}`
                    if (job.impactStatus !== "ZERO") {
                        jobDtos.push(new JobDto(job.name,
                            production.name,
                            country.name,
                            app.name,
                            job.updateTime,
                            job.impactStatus));
                    }
                });
            });
        });
    });
    return jobDtos;
}

export default function getLastThreeIssues(apps) {
    let jobDtos = findAllJobDto(apps);
    jobDtos.sort((dto1, dto2) => {
        return new Date(dto1.updateTime) - new Date(dto2.updateTime);
    });
    const lastThreeIssues = [];
    lastThreeIssues.push(jobDtos[0], jobDtos[1], jobDtos[2]);
    return lastThreeIssues;
}