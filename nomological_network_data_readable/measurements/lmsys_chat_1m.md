# LMSYS-Chat-1M
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** LMSYS-chat-1M, LMSys-Chat-1M, LmsysChat  

## State of the Field

**What it is.** Across papers, the prevailing description is of a large dataset of real-world conversations or interactions, used as a source of prompts and dialogue for chat-oriented work. Definitions vary in emphasis: some describe user prompts, user-model conversations, or broader LLM conversations, while others specify an open-access collection from the Chatbot Arena platform or real-world conversations with state-of-the-art LLMs. Across these descriptions, papers mainly treat it as a source of real-world chat data for fine-tuning and evaluation.

**What it is claimed to measure.** Papers do not link it to any construct or behavioral indicator, so there is no recurring named measurement target in the recorded relationships. Instead, definitions and snippets present it as a source of real-world inputs for assessing non-adversarial reproduction, analyzing usage patterns, representing realistic use cases, and testing classifier generalization.

**Space of uses.** Most papers use it by sampling prompts or conversations from it for fine-tuning or for another analysis, such as rerunning an evaluation, drawing out-of-distribution prompts, or assembling prompt sets meant to reflect real-world use. It is often used alongside WildChat, and one paper also contrasts it with UltraChat as a source of real-world rather than primarily synthetic interactions. The only linked instrument is Human evaluation, where a paper reports randomly sampling examples from LMSys-Chat-1M for a human study.

## Sources

**[Learning from negative feedback, or positive feedback or both](https://proceedings.iclr.cc/paper_files/paper/2025/file/162f1442c568f639b846a00ddc5edbd4-Paper-Conference.pdf) (as "LMSYS-chat-1M")**
> A large-scale dataset of real-world user prompts and conversations used as a source of inputs for fine-tuning and evaluating chat-oriented language models.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf)**
> A large dataset of real-world LLM conversations used here to assess non-adversarial reproduction in practical chat settings.

**[Dehumanizing Machines: Mitigating Anthropomorphic Behaviors in Text Generation Systems](https://aclanthology.org/2025.acl-long.1259.pdf) (as "LMSys-Chat-1M")**
> A dataset of real-world conversations with 25 state-of-the-art LLMs, used to sample anthropomorphic outputs from commercial models.

**[Idiosyncrasies in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25z/sun25z.pdf) (as "LmsysChat")**
> A dataset capturing real-world user interactions, used as a source of out-of-distribution prompts for testing classifier generalization.
