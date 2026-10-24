# Speech instruction following
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Spoken instruction following  

## State of the Field

**Space of definitions.** Across the definitions, this behavior is consistently treated as following instructions that arrive as speech. The common criterion is correct fulfillment of the spoken request: one formulation emphasizes generating an appropriate spoken response that fulfills the user's request, while another emphasizes correctly executing a command or constraint provided through spoken audio.

**Variants.** The naming varies only slightly, with papers using both speech instruction following and spoken instruction following. Studied settings include the helpful_base and vicuna subsets from Alpaca-Eval, a synthesized spoken IFEval derived from the original text-based IFEval, and interleaving speech-text inputs, which one paper notes can be challenging.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead describe assessing it through benchmark settings, specifically the helpful_base and vicuna subsets from Alpaca-Eval for the speech instruction following task, and a synthesized spoken IFEval dataset for spoken instruction-following capabilities.

**What it is taken as evidence of.** The only construct link reported is to Speech understanding, and that link is described as related rather than causal or correlational. One paper places Speech Instruction (SI) under a Speech Understanding section, so the reported construct framing centers on that relation and does not add alternative construct links.

## Sources

**[LLaMA-Omni 2: LLM-based Real-time Spoken Chatbot with Autoregressive Streaming Speech Synthesis](https://aclanthology.org/2025.acl-long.912.pdf)**
> Receiving spoken instructions and generating appropriate spoken responses that fulfill the user's request.

**[VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf) (as "Spoken instruction following")**
> The observable behavior of correctly executing a command or constraint that is provided via a spoken audio input.

## Relationships

### Associated with
- **Speech understanding** (constructs)
  > 3.3.1 Speech Understanding ... Speech Instruction (SI).
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
