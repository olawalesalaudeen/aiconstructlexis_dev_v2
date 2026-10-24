# CipherChat
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage treats CipherChat as a jailbreak method or framework that encodes prompts in cipher, most often a Caesar cipher, to bypass safety alignment and probe a model's intrinsic or inherent characteristics. Most descriptions emphasize the cipher-based prompting itself, with some specifying a three-letter Caesar shift, while one paper gives a fuller procedural account: user instructions are enciphered, a system prompt and few-shot enciphered demonstrations are added, the model is checked for responding in cipher, and the output is then deciphered.

**What it is claimed to measure.** Papers link CipherChat to one construct and no behavioral indicators. The linked construct is Safety alignment, and the claims converge on that single target: papers use CipherChat to measure or examine safety alignment, including a report that it is used to "systematically examine the generalizability of safety alignment to non-natural languages, ciphers" (GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher).

**Space of uses.** Papers use it by encoding user instructions or questions in cipher, commonly a Caesar cipher with shift three, and then submitting those prompts to the model, sometimes with system-role text and few-shot enciphered demonstrations. No other measurement instrument is linked to it; within the literature it is positioned both as a standalone framework for examining LLMs through cipher prompts and as a more challenging testing setup, including uses to obtain responses described as reflecting a model's "true thoughts" and to stress-test whether models reveal biases under alignment bypass.

## Sources

**[GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed4c38fe7899d3653acf39b2102af8ba-Paper-Conference.pdf)**
> A jailbreak method that uses cipher-based languages, such as Caesar cipher, to bypass a model's safety alignment protocols and probe its intrinsic characteristics.

## Relationships

### → CipherChat
- **Safety alignment** (constructs) — *measured_by*
  > We propose a novel framework CipherChat to systematically examine the generalizability of safety alignment to non-natural languages – ciphers. (ABSTRACT)
  - [GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed4c38fe7899d3653acf39b2102af8ba-Paper-Conference.pdf)
