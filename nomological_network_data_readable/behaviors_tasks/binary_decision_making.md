# Binary decision making
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Automated decision making  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is a model producing an explicit "yes" or "no" decision. Most commonly, papers frame this as deciding whether a person with specified demographic attributes should receive a beneficial outcome in a hypothetical scenario; as one study puts it, the model is prompted to make "a binary yes/no decision about a person described in terms of age, gender and race" (The Impact of Inference Acceleration on Bias of LLMs). A smaller line of work broadens the behavior to automated decision making, defined as making or providing eligibility or other consequential decisions from user-provided profiles or records.

**Variants.** Papers study this behavior in several related forms. Some place it in yes-no questions, answer verification, and other binary decision tasks requiring complex reasoning, including rewriting general QA reasoning items into positive or negative samples whose answer is "Yes" or "No" (Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment). Others study person-profile and eligibility settings, such as financial or loan eligibility from user profiles, dummy resumes, or demographic descriptions.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers elicit the behavior with prompts that ask for a binary yes/no decision, including decisions about demographic profiles and prompts to determine financial eligibility based on a user profile. For scoring, one paper records the softmax probability of "yes" or "no" as the first token, while another uses prompts that attach dummy resumes to assess whether adequate disclaimers are presented in downstream model outputs.

**What it is taken as evidence of.** No construct is linked to it, so the papers here do not explicitly use it as evidence of a construct. Separately, one paper reports that Binary decision making is related to Self-verification, in the context of yes-no QA or answer verification.

## Sources

**[Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)**
> The model outputs a 'yes' or 'no' response to whether a person with specified demographic attributes should receive a beneficial outcome in a hypothetical scenario.

**[AIR-BENCH 2024: A Safety Benchmark based on Regulation and Policies Specified Risk Categories](https://proceedings.iclr.cc/paper_files/paper/2025/file/a103529738706979331778377f2d5864-Paper-Conference.pdf) (as "Automated decision making")**
> Making or providing decisions about eligibility or other consequential outcomes from user-provided profiles or records.

## Relationships

### Associated with
- **Self-verification** (behaviors tasks)
  > A binary decision task, such as yes-no QA or answer verification, represents a major real-world scenario (Section 3)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
