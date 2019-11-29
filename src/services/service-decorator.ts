export const service = (serviceName: String) =>
    (target: { serviceName: String }) => target.serviceName = serviceName
