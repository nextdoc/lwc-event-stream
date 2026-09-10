// Auto-generated from stream3EventStreamSchemas.ts — do not edit.
// Generated: 2026-09-10

type EventStreamType = "action.started" | "action.succeeded" | "action.failed" | "send.started" | "send.sent" | "send.failed";

type EventStreamTopic = "action" | "send";

type CustomEventType = `custom.${string}.started` | `custom.${string}.succeeded` | `custom.${string}.failed`;

type EventStreamTypeOrCustom = ("action.started" | "action.succeeded" | "action.failed" | "send.started" | "send.sent" | "send.failed") | (`custom.${string}.started` | `custom.${string}.succeeded` | `custom.${string}.failed`);

type EventStreamOutbound = ({
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Name of the deployed action that started. */
    actionName: string;
    /** A deployed action has been initiated. The actionName identifies which action. */
    type: "action.started";
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Confirmation message from the completed action. */
    message?: string | undefined;
    /** A deployed action completed successfully. The actionName identifies which action. */
    type: "action.succeeded";
    /** Name of the deployed action that succeeded. */
    actionName: string;
    /** Records saved by the action, typically related to the base recordId (e.g. attachments, linked records). */
    artifacts?: {
        /** Salesforce record ID of the affected record (e.g. ContentDocumentLink 06A...). */
        recordId: string;
        /** SObject type of the created record (e.g. ContentDocumentLink). */
        recordType: string;
        /** Customer-defined constant for programmatic dispatch (e.g. primary-attachment, audit-log). */
        label: string;
        /** What the action did to this record. */
        operation: "CREATED" | "UPDATED" | "DELETED" | "REFERENCED";
        /** The parent ContentDocument (068...) that this record links to. Use to correlate with documents known to the LWC. */
        sourceContentDocumentId?: string | undefined;
        /** Human-readable description of what happened. */
        description?: string | undefined;
    }[] | undefined;
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId?: string | undefined;
    /** Name of the deployed action that failed. */
    actionName: string;
    /** Short summary of the failure. */
    errorMessage: string;
    /** Additional detail on the failure, e.g. how to resolve. */
    errorDescription?: string | undefined;
    /** Specific failure type (e.g. FLOW_FAILED, COMMAND_FAILED). */
    errorStatusCode?: string | undefined;
    /** A deployed action failed. The actionName identifies which action. */
    type: "action.failed";
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Name of the deployed action that started. */
    actionName: string;
    /** E-signature send has been initiated. */
    type: "send.started";
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Confirmation message from the completed action. */
    message?: string | undefined;
    /** E-signature send completed successfully. */
    type: "send.sent";
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId?: string | undefined;
    /** Name of the deployed action that failed. */
    actionName: string;
    /** Short summary of the failure. */
    errorMessage: string;
    /** Additional detail on the failure, e.g. how to resolve. */
    errorDescription?: string | undefined;
    /** Specific failure type (e.g. FLOW_FAILED, COMMAND_FAILED). */
    errorStatusCode?: string | undefined;
    /** E-signature send failed. */
    type: "send.failed";
}) | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Name of the deployed action that started. */
    actionName: string;
    /** A custom action has been initiated. Type follows pattern: custom.{name}.started. */
    type: `custom.${string}.started`;
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId: string;
    /** Confirmation message from the completed action. */
    message?: string | undefined;
    /** A custom action completed successfully. Type follows pattern: custom.{name}.succeeded. */
    type: `custom.${string}.succeeded`;
    /** Name of the custom action that succeeded. */
    actionName: string;
    /** Records saved by the custom action. */
    artifacts?: {
        /** Salesforce record ID of the affected record (e.g. ContentDocumentLink 06A...). */
        recordId: string;
        /** SObject type of the created record (e.g. ContentDocumentLink). */
        recordType: string;
        /** Customer-defined constant for programmatic dispatch (e.g. primary-attachment, audit-log). */
        label: string;
        /** What the action did to this record. */
        operation: "CREATED" | "UPDATED" | "DELETED" | "REFERENCED";
        /** The parent ContentDocument (068...) that this record links to. Use to correlate with documents known to the LWC. */
        sourceContentDocumentId?: string | undefined;
        /** Human-readable description of what happened. */
        description?: string | undefined;
    }[] | undefined;
} | {
    /** Shared metadata present on every outbound event. */
    meta: {
        /** Schema version. Bumped on breaking changes to event shapes. */
        contractVersion: 1;
        /** Always nextdoc for outbound events. Identifies the event source. */
        producer: "nextdoc";
        /** When present, correlates this event to an originating action request. Matches the requestId from the action acknowledgment flow. */
        correlationId?: string | undefined;
    };
    /** Salesforce record ID that this event belongs to. */
    recordId?: string | undefined;
    /** Name of the deployed action that failed. */
    actionName: string;
    /** Short summary of the failure. */
    errorMessage: string;
    /** Additional detail on the failure, e.g. how to resolve. */
    errorDescription?: string | undefined;
    /** Specific failure type (e.g. FLOW_FAILED, COMMAND_FAILED). */
    errorStatusCode?: string | undefined;
    /** A custom action failed. Type follows pattern: custom.{name}.failed. */
    type: `custom.${string}.failed`;
};

type EventStreamInbound = {
    /** Name of the deployed action to invoke. Must match the action name configured in the server-side stream deployment. */
    actionName: string;
};

