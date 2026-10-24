# DreamBooth
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers commonly treat DreamBooth as a subject-focused text-to-image resource, but they describe its format in several ways: as a dataset and method for fine-tuning on subject-specific data, as a subject-driven image generation benchmark or test set, and as a text-to-image personalization evaluation setup. The described contents center on subject examples and reference images, including a DreamBooth dataset that "includes 30 different subjects" and settings with "30 new concepts" from DreamBooth used as reference images; some descriptions also frame the setup around subject-driven generation with special identifier tokens.

**What it is claimed to measure.** The papers do not explicitly link DreamBooth to any named constructs or behavioral indicators. Instead, they describe it in task terms, reporting its use for subject generation evaluation in diffusion models, for evaluating reference-based image compositing on test images and generated variants, and for text-to-image personalization or subject-driven generation.

**Space of uses.** In use, papers position DreamBooth mainly as an evaluation setup, benchmark, or test set, rather than alongside any linked measurement instrument; no measurement instrument is linked to it. Reported uses include following DreamBooth settings for reference images, using a DreamBooth test set, extending SHiRA to focus on DreamBooth with a bigger vision model, and generating images at inference with similar prompts for LoRA- or SHiRA-based DreamBooth.

## Sources

**[RRInf: Efficient Influence Function Estimation via Ridge Regression for Large Language Models and Text-to-Image Diffusion Models](https://aclanthology.org/2025.emnlp-main.933.pdf)**
> Dataset and method for fine-tuning text-to-image models on subject-specific data, used here for subject generation evaluation in diffusion models.
