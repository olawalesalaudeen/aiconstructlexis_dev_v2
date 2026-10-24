# MultiWOZ
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** MWOZ  

## State of the Field

**What it is.** Papers commonly treat MultiWOZ as a task-oriented, multi-domain Wizard-of-Oz dialogue dataset or benchmark. Definitions describe conversations where one human acts as a booking system for domains such as hotels and restaurants and the other acts as the user, while other papers frame it more broadly as a large-scale dataset for bookings and information requests. Papers also describe it differently by evaluation task: some use it as a dialogue state tracking benchmark, and another uses a later version built on an earlier release with corrections and enhancements to the test set.

**What it is claimed to measure.** No constructs or behavioral indicators are formally linked to MultiWOZ. Even so, papers use it to evaluate several targets rather than one recorded construct: dialogue state tracking, user satisfaction estimation, and first-order uncertainty quantification, including prediction of how certain the user is that they are more satisfied than would occur by chance, with average crowd-worker user-satisfaction annotations treated as ground truth.

**Space of uses.** No other measurement instrument is formally linked to MultiWOZ. In practice, papers position it both as a widely used benchmark for task-oriented dialogue evaluation and as one dataset among others for broader comparisons, including use alongside SGD and ReDial; some papers also present results on it as a headline benchmark and report state-of-the-art performance there.

## Sources

**[Evaluating Theory of (an uncertain) Mind: Predicting the Uncertain Beliefs of Others from Conversational Cues](https://aclanthology.org/2025.acl-long.395.pdf)**
> A task-oriented Wizard-of-Oz corpus for a conversational booking system, used to evaluate first-order uncertainty quantification based on crowd-worker annotations of user satisfaction.

**[LLM-guided Plan and Retrieval: A Strategic Alignment for Interpretable User Satisfaction Estimation in Dialogue](https://aclanthology.org/2025.naacl-long.523.pdf) (as "MWOZ")**
> Multi-WOZ (Multi-Domain Wizard-of-Oz) is a large-scale, multi-domain task-oriented dialogue dataset used to evaluate dialogue system performance, including user satisfaction estimation in domains like booking and information retrieval.
